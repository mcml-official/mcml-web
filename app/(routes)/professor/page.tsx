import { Separator } from "@/components/ui/separator";
import profImage from "@/public/members/professor_lee2.jpg";
import { GraduationCap } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { MailButton } from "./MailButton";
import { PhoneButton } from "./PhoneButton";

export const metadata: Metadata = {
  title: "Professor",
};

export default function Professor() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col justify-center gap-8 px-4 py-8 lg:flex-row">
      <div className="mx-auto max-w-[200px] shrink-0">
        <Image
          src={profImage}
          alt="Professor"
          className="rounded-lg border object-cover object-top shadow-md"
          width={200}
          height={300}
        />
      </div>

      <section>
        <h2 className="mb-2 text-2xl font-bold">Jong-Seok Lee</h2>
        <section>
          <p className="font-bold">Professor</p>
          <p>School of Integrated Technology, Yonsei University</p>
          <p>Department of Artificial Intelligence, Yonsei University</p>

          <div className="mt-2 flex flex-wrap gap-4">
            <a
              href="https://scholar.google.com/citations?user=YGwwt6cAAAAJ"
              target="_blank"
              className="inline-flex items-center text-blue-500 transition-colors hover:text-blue-600"
            >
              <GraduationCap className="mr-1 h-4 w-4" /> Google Scholar
            </a>
            <MailButton />
            <PhoneButton />
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <h3 className="text-xl font-bold">Professional Services</h3>
          <br />
          <ul className="space-y-2">
            <li>
              <strong>Senior Member</strong>, IEEE
            </li>
            <li>
              <strong>Life Member</strong>, IEIE, Korea
            </li>
            <li>
              <strong>Board Member</strong>, Brain Engineering Society of Korea
            </li>
            <li>
              <strong>Member</strong>, Multimedia Signal Processing Technical
              Committee (MMSP TC), IEEE Signal Processing Society (2021-2023,
              2025-2027)
            </li>
            <li>
              <strong>Member</strong>, Image, Video, and Multidimensional Signal
              Processing Technical Committee (IVMSP TC), IEEE Signal Processing
              Society (2025-2027)
            </li>

            <br />

            <li>
              <strong>Associate Editor</strong>, IEEE Communications Magazine
              (2016-2023)
            </li>
            <li>
              <strong>Area Editor</strong>, Signal Processing: Image
              Communication (2013-)
            </li>
            <li>
              <strong>Associate Editor</strong>, Frontiers in Signal Processing
              (2021-)
            </li>
            <li>
              <strong>Associate Editor</strong>, IEEE Transactions on Multimedia
              (2024-)
            </li>

            <br />

            <li>
              <strong>Co-chair</strong>, Workshop on Hot Topics in 3D (Hot3D)
              2015
            </li>
            <li>
              <strong>Chair</strong>, Spring School on Social Media Retrieval
              (S3MR) 2010
            </li>
            <li>
              <strong>Co-organizer</strong>, Summer School on Social Media
              Retrieval (S3MR) 2011
            </li>

            <br />

            <li>
              <strong>TPC Chair</strong>, Workshop on Network and Operating
              System Support for Digital Audio and Video (NOSSDAV) 2020
            </li>
            <li>
              <strong>Workshop Chair</strong>, International Conference on
              Computing, Networking and Communications (ICNC) 2014-2016
            </li>
            <li>
              <strong>Publicity Chair</strong>, International Conference on
              Human-Agent Interaction (HAI) 2015
            </li>
            <li>
              <strong>Local Chair</strong>, Image, Video, and Multidimensional
              Signal Processing Workshop (IVMSP) 2013
            </li>
            <li>
              <strong>Local Chair</strong>, International Conference on Neural
              Information Processing (ICONIP) 2013
            </li>

            <br />

            <li>
              <strong>Area Chair</strong>, ACM Multimedia Conference (MM)
              2018-2025
            </li>
            <li>
              <strong>Area Chair</strong>, IEEE International Conference on
              Image Processing (ICIP) 2019-2025
            </li>
            <li>
              <strong>Area Chair</strong>, IEEE International Conference on
              Multimedia & Expo (ICME) 2021-2025
            </li>
            <li>
              <strong>Area Chair</strong>, International Conference on Pattern
              Recognition (ICPR) 2012
            </li>
          </ul>

          <p className="mt-4">
            <strong>TPC member and reviewer</strong> of many journals and
            conferences
          </p>
        </section>
      </section>
    </main>
  );
}
