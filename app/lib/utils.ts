import { Blog, Changelog, changelogItems, posts } from "#site/content";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const formatDate = (date: string) => {
  noStore();

  const formatter = new Intl.DateTimeFormat("en-PH", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" }));
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let target = new Date(new Date(date).toLocaleString("en-US", { timeZone: "Asia/Manila" }));

  const yearsAgo = now.getFullYear() - target.getFullYear();
  const monthsAgo = now.getMonth() - target.getMonth();
  const daysAgo = now.getDate() - target.getDate();

  let formattedRelative = "Today";
  if (yearsAgo > 0) {
    formattedRelative = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedRelative = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedRelative = `${daysAgo}d ago`;
  }

  return `${formatter.format(target)} (${formattedRelative})`;
};


export const getTimeOfDayGreeting = () => {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" }));
  const hours = now.getHours();

  if (hours < 12) {
    return "Good morning!🌞";
  } else if (hours < 17) {
    return "Good afternoon! 🌤️";
  } else {
    return "Good evening!🌙";
  }
};


export const cx = (...classes) => classes.filter(Boolean).join(" ");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fetchAndSortChangelogEntrees(): Changelog[] {
  try {
    const allChangelogItems = changelogItems;
    return allChangelogItems
      .filter((item) => !item.draft)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      );
  } catch (error) {
    notFound();
  }
}

export function fetchAndSortBlogPosts(): Blog[] {
  try {
    const allPosts = posts; // Assuming 'posts' is a promise or async call
    return allPosts
      .filter((post) => !post.draft)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      );
  } catch (error) {
    notFound();
  }
}

export function getRelatedBlogPosts(
  currentPost: Blog,
  maxResults: number = 3,
): Blog[] {
  const allPosts = fetchAndSortBlogPosts().filter(
    (post) => post.slug !== currentPost.slug,
  );

  const sameCategories = allPosts.filter((post) =>
    post.categories.some((category) =>
      currentPost.categories.includes(category),
    ),
  );

  // Sort by number of matching categories (most relevant first)
  const sortedByRelevance = sameCategories.sort((a, b) => {
    const aMatches = a.categories.filter((cat) =>
      currentPost.categories.includes(cat),
    ).length;
    const bMatches = b.categories.filter((cat) =>
      currentPost.categories.includes(cat),
    ).length;
    return bMatches - aMatches;
  });

  if (sortedByRelevance.length >= maxResults) {
    return sortedByRelevance.slice(0, maxResults);
  }

  const remainingPosts = allPosts.filter(
    (post) => !sortedByRelevance.some((related) => related.slug === post.slug),
  );

  return [...sortedByRelevance, ...remainingPosts].slice(0, maxResults);
}

export async function fetchAndSortChangelogPosts(): Promise<Changelog[]> {
  try {
    const allChangelogItems = await changelogItems;
    return allChangelogItems
      .filter((item) => !item.draft)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      );
  } catch (error) {
    notFound();
  }
}

export function extractUniqueBlogCategories(posts: Blog[]): Set<string> {
  const categories = new Set<string>();
  posts.forEach((post) => {
    post.categories.forEach((category) => categories.add(category));
  });
  return categories;
}
