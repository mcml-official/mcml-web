export default function Yfcc100mVideos() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold">YFCC100M video metadata database</h1>
        </div>

        <section>
          <h3 className="mb-2 text-xl font-semibold">Introduction</h3>
          <p className="text-gray-700">
            <a 
              href="http://dx.doi.org/10.1145/2812802" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              The Yahoo Flickr Creative Commons 100 Million dataset (YFCC100M)
            </a>{" "}
            is one of the largest public multimedia databases which contains 99.2
            million images and 0.8 million videos. Although its videos take only a
            small part of the dataset in comparison to its images, the video part
            is still one of the largest publicly available video databases.
            However, some essential video metadata and features are missing in the
            original database. Therefore, we obtained several metadata and
            features from the videos and release the database here for the
            research community.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h3 className="mb-2 text-xl font-semibold">Description</h3>
          <h4 className="mt-4 mb-2 text-lg font-medium">Metadata included</h4>
          <p className="mb-2 text-gray-700">
            This database includes several essential spatial, temporal, and
            content features of videos in the YFCC100M dataset. Following features
            and metadata are included in this database.
          </p>
          
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li>
              <b>Spatial features</b>: aspect ratio, orientation
            </li>
            <li>
              <b>Temporal features</b>: duration (sec.), number of frames,
              frames per second
            </li>
            <li>
              <b>Content features</b>: 100-bin hue histogram, spatial
              information (SI), temporal information (TI)
            </li>
          </ul>
          
          <p className="text-gray-700">
            For more information, please refer to our paper which is mentioned
            below.
          </p>

          <h4 className="mt-4 mb-2 text-lg font-medium">Structure</h4>
          <p className="mb-2 text-gray-700">
            The database is in Tab-Separated Values (TSV) format with LF (Unix)
            line endings. Each line contains following tab-separated fields of
            each video:
          </p>
          
          <ul className="list-disc pl-5 text-gray-700">
            <li>Video hash in the original YFCC100M dataset</li>
            <li>Aspect ratio</li>
            <li>Orientation (P = portrait, L = landscape, S = 1:1)</li>
            <li>Duration (sec.)</li>
            <li>Number of frames</li>
            <li>Frame rate (FPS)</li>
            <li>Spatial information (SI)</li>
            <li>Temporal information (TI)</li>
            <li>1st bin of the 100-bin hue histogram</li>
            <li>2nd bin of the 100-bin hue histogram</li>
            <li>...</li>
            <li>100th bin of the 100-bin hue histogram</li>
          </ul>
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
              J.-H. Choi and J.-S. Lee, &quot;Analysis of spatial, temporal, and
              content characteristics of videos in the YFCC100M dataset,&quot; ACM
              Multimedia (MM), Multimedia COMMONS Workshop, Oct. 2016
              <br />
              <a
                className="text-blue-600 hover:underline flex items-center mt-1"
                href="http://dx.doi.org/10.1145/2983554.2983559"
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
                href="/files/dataset/yfcc100m_videos.zip"
                className="text-blue-600 hover:underline flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                yfcc100m_videos.zip (219MB)
              </a>
            </li>
            <li>SHA1: cc019c4119a06bc8a7197a42d335d94c0ec21244</li>
            <li>
              Last updated: Oct. 15, 2016
              <ul className="list-disc pl-5 mt-1">
                <li>Oct. 15, 2016: initial release</li>
              </ul>
            </li>
          </ul>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h3 className="mb-2 text-xl font-semibold">Contact</h3>
          
          <ul className="list-disc pl-5 text-gray-700">
            <li>Jun-Ho Choi: idearibosome at yonsei.ac.kr</li>
            <li>Jong-Seok Lee: jong-seok.lee at yonsei.ac.kr</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
