import Link from "next/link";
import Image from "next/image";
import News from "./components/News";
import { researchAreas } from "@/app/data/researchAreas";

export default function Home() {
  return (
    <>
      <header className="h-[80vh] max-h-[540px] bg-[url('images/landing.jpg')] bg-cover bg-center text-center bg-blend-multiply dark:bg-black/50">
        <div className="mx-auto max-w-4xl pt-16 text-[#1e2d4c]">
          <h1 className="text-3xl font-medium md:text-4xl">
            Multimedia Computing & Machine Learning Group
          </h1>
          <p className="text-lg md:text-xl">
            led by{" "}
            <Link
              href="/professor"
              className="underline transition-colors hover:text-[#1f3566]"
            >
              Prof. Jong-Seok Lee
            </Link>
          </p>
          <p className="text-sm md:text-base">
            School of Integrated Technology, Yonsei University
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-32 px-4 py-16">
        <section>
          <h2 className="mb-8 text-3xl font-bold">Research Areas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((topic, index) => (
              <div key={index}>
                <Link
                  href={`/research#topic-${index}`}
                  className={`group block rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg ${topic.borderColor}`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`rounded-full bg-gray-50 p-2 transition-colors ${topic.bgColor}`}
                    >
                      <topic.icon
                        className={`h-5 w-5 text-gray-600 ${topic.color}`}
                      />
                    </div>
                    <h3 className={`text-xl font-semibold ${topic.color}`}>
                      {topic.title}
                    </h3>
                  </div>
                  <p className="line-clamp-2 text-gray-600 dark:text-gray-400">
                    {topic.subAreas
                      ? `Focusing on ${topic.subAreas.map((sub) => sub.title.toLowerCase()).join(" and ")}.`
                      : topic.description?.split(".")[0]}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* News Section */}
        <News />

        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/hae.JPG"
              alt="Lab environment"
              width={400}
              height={300}
              className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/mcml.JPG"
              alt="Research activities"
              width={400}
              height={300}
              className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/fest.JPG"
              alt="Team collaboration"
              width={400}
              height={300}
              className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </section>
      </main>
    </>
  );
}
