import type { MetadataRoute } from "next";
import { COOKIES_PATH, CONTACT_PATH, HOME_PATH, PRIVACY_PATH, SITE_URL } from "@/lib/i18n";

/** Every indexable URL, each declaring its hreflang alternates so Google
 * treats the es/en pairs as translations of each other rather than two
 * unrelated pages, the same signal the <link rel="alternate"> tags in
 * each page's metadata send, duplicated here per the sitemap spec. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pairs = [
    { es: HOME_PATH.es, en: HOME_PATH.en },
    { es: CONTACT_PATH.es, en: CONTACT_PATH.en },
    { es: PRIVACY_PATH.es, en: PRIVACY_PATH.en },
    { es: COOKIES_PATH.es, en: COOKIES_PATH.en },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const pair of pairs) {
    const languages = {
      es: `${SITE_URL}${pair.es}`,
      en: `${SITE_URL}${pair.en}`,
    };

    entries.push(
      {
        url: `${SITE_URL}${pair.es}`,
        lastModified: new Date(),
        alternates: { languages },
      },
      {
        url: `${SITE_URL}${pair.en}`,
        lastModified: new Date(),
        alternates: { languages },
      },
    );
  }

  return entries;
}
