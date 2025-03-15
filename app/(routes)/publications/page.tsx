import mcml_publications from "@/app/data/publications.json";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Publications",
};

export default function Publications() {
  type Publication = {
    type: string;
    title: string;
    author: string;
    year: string;
    journal?: string;
    volume?: string;
    pages?: string;
    month?: string;
    doi?: string;
    arxiv?: string;
    code?: string;
    booktitle?: string;
  };

  const publications: Publication[] = mcml_publications;

  const groupedPublications = publications.reduce(
    (acc, pub) => {
      const year = pub.year;
      const type = pub.type;

      if (!acc[year]) {
        acc[year] = {};
      }
      if (!acc[year][type]) {
        acc[year][type] = [];
      }

      acc[year][type].push(pub);
      return acc;
    },
    {} as Record<string, Record<string, Publication[]>>,
  );

  // Sort years in descending order
  const sortedYears = Object.keys(groupedPublications).sort(
    (a, b) => parseInt(b) - parseInt(a),
  );

  return (
    <main className="mx-auto flex max-w-6xl flex-col justify-center gap-8 px-4 py-12 lg:flex-row">
      <div className="flex flex-col gap-8">
        {sortedYears.map((year) => (
          <div key={year} className="mb-8">
            <div className="relative -top-20" id={year} />
            <h2 className="mb-4 text-2xl font-bold">{year}</h2>
            <div className="flex flex-col gap-4 md:flex-row">
              {["Conference", "Journal"].map(
                (type) =>
                  groupedPublications[year][type] && (
                    <div key={type} className="flex-1">
                      <h3 className="mb-3 text-xl font-semibold">{type}</h3>
                      {groupedPublications[year][type].map((pub, index) => (
                        <div key={index} className="mb-4">
                          <p className="font-medium">{pub.title}</p>
                          <p className="text-gray-600 dark:text-gray-400">
                            {pub.author}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            {pub.journal || pub.booktitle}
                            {pub.volume && `, ${pub.volume}`}
                            {pub.pages && `, pp. ${pub.pages}`}
                            {pub.month && `, ${pub.month}.`} {pub.year}
                          </p>
                          <div className="mt-1 flex gap-1">
                            {pub.doi && (
                              <a
                                href={pub.doi}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline"
                              >
                                <Badge
                                  variant="secondary"
                                  className="hover:bg-secondary/80"
                                >
                                  DOI
                                </Badge>
                              </a>
                            )}
                            {pub.arxiv && (
                              <a
                                href={pub.arxiv}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline"
                              >
                                <Badge
                                  variant="secondary"
                                  className="hover:bg-secondary/80"
                                >
                                  arXiv
                                </Badge>
                              </a>
                            )}
                            {pub.code && (
                              <a
                                href={pub.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline"
                              >
                                <Badge
                                  variant="secondary"
                                  className="hover:bg-secondary/80"
                                >
                                  Code
                                </Badge>
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ),
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
