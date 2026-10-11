import { SITE_URL } from "@/lib/i18n";

/** Organization/ProfessionalService structured data — mounted once per
 * locale root layout. Only facts that are true today (name, location,
 * contact email, logo): no invented address line, no fabricated review
 * data, consistent with the "no inventar cifras" rule the rest of the
 * site's copy follows. */
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nublix",
    legalName: "Nublix Digital Solutions, S.L.",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    email: "hola@nublix.com",
    areaServed: {
      "@type": "City",
      name: "Barcelona",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
