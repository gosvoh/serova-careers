import { content } from "@/content";
import { site } from "@/lib/site";

export default function StructuredData() {
  const personId = `${site.url}/#person`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url: site.url,
        jobTitle: "Карьерный консультант",
        description: content.about.join(". "),
        knowsLanguage: "ru",
        email: content.contacts.email,
        sameAs: [content.contacts.tg, content.contacts.channel],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.title,
        inLanguage: "ru",
        publisher: { "@id": personId },
      },
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: site.title,
        description: site.description,
        inLanguage: "ru",
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": personId },
      },
      {
        "@type": "Service",
        "@id": `${site.url}/#service`,
        name: "Карьерные консультации онлайн",
        serviceType: "Карьерное консультирование",
        description: content.workOn.join(". "),
        provider: { "@id": personId },
        areaServed: "Весь мир",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${site.url}/#contact`,
          availableLanguage: "ru",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#questions`,
        inLanguage: "ru",
        mainEntity: content.faq.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
