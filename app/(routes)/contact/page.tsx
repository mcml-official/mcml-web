import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col justify-center gap-8 px-4 py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="h-[400px] overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12680.434933860555!2d126.67744589284399!3d37.387260760591325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x7914af9c04080e73!2z7Jew7IS464yA7ZWZ6rWQIOq1reygnOy6oO2NvOyKpA!5e0!3m2!1sko!2s!4v1439471967794"
            className="h-full w-full border-0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="space-y-8 rounded-lg bg-white p-6 shadow-lg">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              {`Professor's Office`}
            </h2>
            <address className="text-gray-600 not-italic">
              #305, Veritas C Hall
              <br />
              85 Songdogwahak-ro
              <br />
              Yeonsu-gu, Incheon, 21983
              <br />
              South Korea
            </address>
          </div>

          <Separator />

          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Laboratory
            </h2>
            <address className="text-gray-600 not-italic">
              #326, Veritas C Hall
              <br />
              85 Songdogwahak-ro
              <br />
              Yeonsu-gu, Incheon, 21983
              <br />
              South Korea
            </address>
          </div>
        </div>
      </div>
    </main>
  );
}
