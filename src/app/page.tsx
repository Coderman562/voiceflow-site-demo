"use client";

import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Milpitas Charity Bingo Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Embed the external site */}
      <iframe
        src="https://milpitascharitybingo.com/"
        style={{
          width: "100%",
          height: "100vh",
        }}
      />

      {/* Properly load the Voiceflow chat widget */}
      <Script
        src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          window.voiceflow.chat.load({
            verify: { projectID: "683fa1b188e6cd4b05955947" },
            url: "https://general-runtime.voiceflow.com",
            versionID: "production",
            voice: { url: "https://runtime-api.voiceflow.com" },
          });
        }}
      />
    </>
  );
}
