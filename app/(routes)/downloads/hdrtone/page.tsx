export default function HdrTone() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold">Physiological responses of tone-mapped HDR video database</h1>
        </div>

        <section>
          <h3 className="mb-2 text-xl font-semibold">Introduction</h3>
          <p className="text-gray-700">
            Implicit monitoring of the user perception by using physiological
            signals has been attracting much attention with the noticeable
            development of sensors and processing tools. This database is
            collected to investigate the perceptual experience of tone-mapped HDR
            videos by using physiological signals.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h3 className="mb-2 text-xl font-semibold">Description</h3>
          <p className="mb-4 text-gray-700">
            This database includes physiological signals (EEG, GSR, respiration,
            plethysmography, and skin temperature), video sequences, and
            questionnaire results. Details of the data can be found in our paper
            that is mentioned below.
          </p>

          <h4 className="mt-4 mb-2 text-lg font-medium">Physiological signals</h4>
          <p className="mb-2 text-gray-700">
            Physiological signals were recorded while subjects are watching
            videos. The signals are in .bdf file format, and named as follows:{" "}
            <br />
            <code className="bg-gray-100 px-1 py-0.5 rounded">
              (subject ID)_(name of corresponding video)_(type of corresponding
              video)
            </code>
          </p>

          <h4 className="mt-4 mb-2 text-lg font-medium">Videos</h4>
          <p className="mb-2 text-gray-700">
            Two types of videos, namely, &apos;ldr&apos; and &apos;tmd&apos; are included in this
            database. Both types of videos are in a standard dynamic range (or low
            dynamic range) of luminance, but videos of &apos;tmd&apos; type were tone-mapped
            from high dynamic range while videos of &apos;ldr&apos; type were not. There are
            four contents of videos, hall, objects, sky, and window.
          </p>

          <h4 className="mt-4 mb-2 text-lg font-medium">Questionnaire</h4>
          <p className="mb-2 text-gray-700">
            Results of the questionnaire are named with subject ID and the number
            of question (e.g., Q1), and aligned in alphabetical order of the name
            of corresponding video, i.e., <br />
            <code className="bg-gray-100 px-1 py-0.5 rounded">
              hall_1080p_ldr, hall_1080p_tmd, objects_1080p_ldr,
              objects_1080p_tmd, ...
            </code>
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h3 className="mb-2 text-xl font-semibold">License note</h3>
          <p className="mb-2 text-gray-700">
            The database is available under{" "}
            <a 
              href="https://creativecommons.org/licenses/by/3.0/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Creative Commons Attribution 3.0
            </a>{" "}
            license. Please cite following paper when you use this database:
          </p>
          
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              S.-E. Moon and J.-S. Lee, &quot;Perceptual experience analysis for
              tone-mapped HDR videos based on EEG and peripheral physiological
              signals,&quot; IEEE Trans. Autonomous Mental Development, vol. 7, no.
              3, pp. 236-247, Sep. 2015
              <br />
              <a
                className="text-blue-600 hover:underline flex items-center mt-1"
                href="http://dx.doi.org/10.1109/TAMD.2015.2449553"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">Detail</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </li>
          </ul>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h3 className="mb-2 text-xl font-semibold">Download</h3>
          
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              <a 
                href="/files/dataset/hdrtone/phy+sub.zip"
                className="text-blue-600 hover:underline flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Physiological signals and questionnaire results
              </a>
              <div className="text-sm text-gray-500 ml-5">
                (320MB, SHA1: 4178643099ef9ff0e40c4f8d3082826d9f102728)
              </div>
            </li>
            <li className="mt-2">
              <a 
                href="/files/dataset/hdrtone/10-20_32ch.ced"
                className="text-blue-600 hover:underline flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Location file of physiological signals (.ced)
              </a>
              <div className="text-sm text-gray-500 ml-5">
                (1.83KB, SHA1: bed8ee93e0b4cf83c34ee150d1a7217e3b86392d)
              </div>
            </li>
            <li className="mt-2">
              Videos
              <ul className="list-disc pl-5 mt-1">
                <li>
                  <a 
                    href="/files/dataset/hdrtone/hall.zip"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Hall
                  </a>
                  <div className="text-sm text-gray-500 ml-5">
                    (4.14GB, SHA1: 93e7665636607b21e8bcd0fb42844e09e64d36a5)
                  </div>
                </li>
                <li className="mt-1">
                  <a 
                    href="/files/dataset/hdrtone/objects.zip"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Objects
                  </a>
                  <div className="text-sm text-gray-500 ml-5">
                    (8.13GB, SHA1: d58a405248fac8c397495178dc19f5599fd8a640)
                  </div>
                </li>
                <li className="mt-1">
                  <a 
                    href="/files/dataset/hdrtone/sky.zip"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Sky
                  </a>
                  <div className="text-sm text-gray-500 ml-5">
                    (2.64GB, SHA1: 2c4c067627897e3ecdce81b1ba576ff978affe4b)
                  </div>
                </li>
                <li className="mt-1">
                  <a 
                    href="/files/dataset/hdrtone/window.zip"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Window
                  </a>
                  <div className="text-sm text-gray-500 ml-5">
                    (1.67GB, SHA1: efc306e6893e14c974b7570e92773fdd8e914483)
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h3 className="mb-2 text-xl font-semibold">Contact</h3>
          
          <ul className="list-disc pl-5 text-gray-700">
            <li>Jong-Seok Lee: jong-seok.lee@yonsei.ac.kr</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
