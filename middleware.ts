import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Show how it would be created, but don't actually call it
const showSupabaseClientSetup = () => {
  const supabase = createServerClient(
    "process.env.NEXT_PUBLIC_SUPABASE_URL",
    "process.env.NEXT_PUBLIC_SUPABASE_ANON",
    {
      cookies: {
        get(name: string) {
          // example cookie getter
          return undefined;
        },
        set(name: string, value: string, options: CookieOptions) {
          // example cookie setter
        },
        remove(name: string, options: CookieOptions) {
          // example cookie remover
        },
      },
    }
  );

  return supabase;
};

// You can call showSupabaseClientSetup() for demo purposes, but skip it during actual runtime
export async function middleware(request: NextRequest) {
  // Just return the default response without creating the client
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
