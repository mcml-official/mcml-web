import { ExternalLink } from "lucide-react";
import { Metadata } from "next";
import downloads from "@/app/data/downloads.json";

export const metadata: Metadata = {
  title: "Downloads",
};

export default function Downloads() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <ul className="space-y-4">
        {downloads.map((item, index) => (
          <li key={index} className="border-b border-gray-100 pb-4">
            <a
              href={item.link}
              target={item.isExternal ? "_blank" : "_self"}
              rel={item.isExternal ? "noopener noreferrer" : ""}
              className="group flex items-start transition-colors hover:text-blue-600"
            >
              {item.isExternal ? (
                <ExternalLink className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-blue-600" />
              ) : (
                <div className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 rounded-full border-2 border-gray-400 group-hover:border-blue-600"></div>
              )}
              <span className="text-lg">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
