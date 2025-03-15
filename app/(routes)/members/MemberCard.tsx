import { Button } from "@/components/ui/button";
import { Globe, Mail } from "lucide-react";
import Image from "next/image";

interface Member {
  name: string;
  role: string;
  interests: string[];
  email: string;
  website?: string;
  image?: string;
}

interface MemberCardProps {
  member: Member;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="bg-card text-card-foreground flex overflow-hidden rounded-lg shadow-md">
      <div className="relative w-1/3 flex-shrink-0 overflow-hidden">
        <div className="relative h-full w-full pb-[133.33%]">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="scale-105 object-cover dark:brightness-90"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex flex-grow flex-col justify-between p-4">
        <div>
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <div className="mb-2 text-xs text-gray-600 dark:text-gray-400">
            <strong>
              {member.interests.length > 1 ? "Interests" : "Interest"}:
            </strong>{" "}
            {member.interests.join(", ")}
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={`mailto:${member.email}`} className="text-xs">
              <Mail className="mr-1 h-3 w-3" />
              Email
            </a>
          </Button>
          {member.website && (
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs"
              >
                <Globe className="mr-1 h-3 w-3" />
                Website
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
