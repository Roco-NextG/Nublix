import Script from "next/script";

const CLARITY_PROJECT_ID = "yz4qbq3psl";

/** Microsoft Clarity — session recordings and heatmaps, loaded via
 * next/script with "afterInteractive" so it never blocks first paint.
 * This sets its own tracking cookies, which is why /cookies and
 * /en/cookies name it explicitly — keep that page in sync if this script
 * is ever removed or swapped for a different analytics tool. */
export default function ClarityScript() {
  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");`}
    </Script>
  );
}
