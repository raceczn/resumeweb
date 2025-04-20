"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { HiOutlineArrowSmRight as ViewIcon } from "react-icons/hi";

import Card from "@/app/data/Card";
import { AchievementItem } from "@/app/data/achievements";

const staticData: AchievementItem[] = [
  {
    id: 5,
    credential_id: "Certification",
    name: "Responsive Web Design - Developer Certification",
    issuing_organization: "FreeCodeCamp",
    issue_date: "2023-09-02",
    image: "/images/achievements/certificates/freecodecamp_webdesign.png",
    url_credential:
      "https://drive.google.com/file/d/1iyosTsk-XrFKfv6dAu5yEDrSRHyV5dQB/view?usp=sharing",
    category: "certificate",
    is_show: true,
  },
  {
    id: 1,
    credential_id: "Academic Awards",
    name: "Gawad Parangal 2023 - Student Excellence Award",
    issuing_organization: "Cavite State University",
    issue_date: "2024-02-05",
    image: "/images/achievements/awards/GawadParangal.PNG",
    url_credential:
      "https://drive.google.com/file/d/1ontZitkOe3u63oEykwTpojrGO6XhSs88/view?usp=sharing",
    category: "awards",
    is_show: true,
  },
  {
    id: 4,
    credential_id: "Academic Awards",
    name: "Techno Quiz Bee - 1st Place Championship",
    issuing_organization: "DCS - Cavite State University",
    issue_date: "2024-04-13",
    image: "/images/achievements/awards/TechnoQuizBee.PNG",
    url_credential:
      "https://drive.google.com/file/d/1QVkzNABZnln4k8Uwkg1tb_Qghf-9W4c9/view?usp=sharing",
    category: "awards",
    is_show: true,
  },
  {
    id: 2,
    credential_id: "Certification",
    name: "Javascript Algorithms and Data Structures",
    issuing_organization: "FreeCodeCamp",
    issue_date: "2025-04-07",
    image:
      "/images/achievements/certificates/freecodecamp_javascript_dataStructure.png",
    url_credential:
      "https://drive.google.com/file/d/1RTZgjVud35M9RQUBZAnQNDunFCmd3p-v/view?usp=sharing",
    category: "certificate",
    is_show: true,
  },
  {
    id: 3,
    credential_id: "Certification",
    name: "The Web Developer Bootcamp 2025",
    issuing_organization: "Udemy",
    issue_date: "2025-03-31",
    image: "/images/achievements/certificates/webdeveloperUdemy.jpg",
    url_credential:
      "https://drive.google.com/file/d/1ayMNucUO4KNXlQ-jVm4kYNDak-uyxCSG/view?usp=sharing",
    category: "certificate",
    is_show: true,
  },
];

const AchievementCard = ({
  credential_id,
  name,
  issuing_organization,
  issue_date,
  expiration_date,
  image,
  url_credential,
}: AchievementItem) => {
  const issueDate = format(parseISO(issue_date), "MMMM yyyy");
  return (
    <Link href={url_credential} className="flex h-full" target="_blank">
      <Card className="group flex h-full flex-col overflow-hidden">
        <div className="relative">
          <Image
            src={image}
            alt={name}
            width={500}
            height={200}
            className="min-h-[180px] w-full object-cover md:h-[170px]"
          />
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 rounded-t-lg bg-black text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-80">
            <ViewIcon size={20} />
          </div>
        </div>
        <div className="my-auto flex h-full flex-col justify-between space-y-2 p-4">
          {credential_id && (
            <p className="text-sm text-neutral-500">{credential_id}</p>
          )}
          <p className="text-lg text-neutral-900">{name}</p>
          <p className="text-sm text-neutral-500">{issuing_organization}</p>
          <div className="mt-auto space-y-1">
            <p className="text-xs text-neutral-400">Issued on</p>
            <p className="text-sm text-neutral-500">{issueDate}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

const Achievements = () => {
  const params = useSearchParams();

  const [filter, setFilter] = useState({
    category: params.get("category") || "",
    search: params.get("search") || "",
  });

  const [isLoading, setIsLoading] = useState(true);

  const category = params.get("category");
  const search = params.get("search");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate 1s loading

    return () => clearTimeout(timeout);
  }, []);

  const filteredAchievements: AchievementItem[] = staticData
    ?.filter(
      (item: AchievementItem) =>
        item?.is_show &&
        (!category || item?.category === category) &&
        (!search ||
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.issuing_organization
            .toLowerCase()
            .includes(search.toLowerCase())),
    )
    .sort((a: AchievementItem, b: AchievementItem) => b.id - a.id);

  return (
    <section className="space-y-4 px-4">
      {!isLoading && filteredAchievements.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {filteredAchievements.map((item, index) => (
            <div key={index}>
              <AchievementCard {...item} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Achievements;
