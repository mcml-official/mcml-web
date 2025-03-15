import { Globe } from "lucide-react";
import { AlumniMember } from "@/app/data/members";

interface AlumniCardProps {
  alum: AlumniMember;
}

export function AlumniCard({ alum }: AlumniCardProps) {
  return (
    <div className="bg-card text-card-foreground flex flex-col rounded-lg p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <h3 className="font-medium">{alum.name}</h3>
          {alum.role && (
            <p className="text-gray-600 dark:text-gray-400">{alum.role}</p>
          )}
        </div>
        {alum.website && (
          <a
            href={alum.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
          >
            <Globe className="mr-1 h-4 w-4" />
            Website
          </a>
        )}
      </div>
    </div>
  );
}
