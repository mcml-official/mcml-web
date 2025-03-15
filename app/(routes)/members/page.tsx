import { alumni, members } from "@/app/data/members";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { AlumniCard } from "./AlumniCard";
import { MemberCard } from "./MemberCard";

export const metadata: Metadata = {
  title: "Members",
};

export default function Members() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-8 text-2xl font-semibold">Ph.D. Students</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {members
          .filter((x) => x.role === "Ph.D. Student")
          .map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
      </div>

      <Separator className="my-8" />

      <h2 className="mb-8 text-2xl font-semibold">M.S. Students</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {members
          .filter((x) => x.role === "M.S. Student")
          .map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
      </div>

      <Separator className="my-8" />

      <h3 className="mb-8 text-2xl font-semibold">Alumni</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {alumni.map((alum, index) => (
          <AlumniCard key={index} alum={alum} />
        ))}
      </div>
    </main>
  );
}
