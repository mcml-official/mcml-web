import { researchAreas } from "@/app/data/researchAreas";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
};

export default function Research() {
  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-20">
          {researchAreas.map((area, index) => (
            <div key={index} className="relative">
              <div className="mb-6 flex items-center">
                <div className="relative -top-30" id={`topic-${index}`} />
                <div className="mr-4 rounded-full bg-gray-50 p-3 dark:bg-gray-800">
                  <area.icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {area.title}
                </h2>
              </div>

              {area.description && (
                <p className="mb-8 px-3 leading-relaxed text-gray-600 md:ml-16 md:px-0 dark:text-gray-400">
                  {area.description}
                </p>
              )}

              {area.subAreas && (
                <div className="space-y-8 pl-6 md:ml-16">
                  {area.subAreas.map((subArea, subIndex) => (
                    <div
                      key={subIndex}
                      className="border-l-2 border-gray-200 pl-3 md:pl-6"
                    >
                      <div className="mb-3 flex items-center">
                        <div className="mr-3 rounded-full bg-gray-50 p-2 dark:bg-gray-800">
                          <subArea.icon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                          {subArea.title}
                        </h3>
                      </div>
                      <p className="ml-10 leading-relaxed text-gray-600 dark:text-gray-400">
                        {subArea.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
