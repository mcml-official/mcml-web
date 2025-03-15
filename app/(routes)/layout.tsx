"use client";

import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

export default function SubpageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the current pathname
  const pathname = usePathname();

  // Extract title from pathname
  const title = pathname.split("/")[1];
  const formattedTitle = title
    ? title.charAt(0).toUpperCase() + title.slice(1)
    : "";

  return (
    <>
      <div className="hidden h-30 bg-[url('images/landing.jpg')] bg-cover bg-center md:block">
        <h1 className="grid h-full place-content-center bg-black/30 text-4xl font-bold text-white">
          {formattedTitle}
        </h1>
      </div>
      <h1 className="px-4 pt-12 text-4xl font-bold md:hidden">
        {formattedTitle}
      </h1>
      <Separator className="mt-8 md:hidden" />
      {children}
    </>
  );
}
