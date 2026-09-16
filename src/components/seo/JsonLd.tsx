export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://jkdigital.in/#organization",
        "name": "JK Digital Solutions",
        "url": "https://jkdigital.in",
        "logo": "https://jkdigital.in/logo.png",
        "image": "https://jkdigital.in/og-image.jpg",
        "description": "Ahmedabad's premier high-performance digital marketing, custom Next.js development, SEO, and Google Ads agency.",
        "telephone": "+919876543210",
        "email": "hello@jkdigital.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bodakdev, SG Highway",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "380054",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "23.0225",
          "longitude": "72.5714"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:30",
            "closes": "20:00"
          }
        ],
        "sameAs": [
          "https://instagram.com/jkdigitalsolutions",
          "https://linkedin.com/company/jkdigitalsolutions"
        ],
        "priceRange": "₹₹₹"
      },
      {
        "@type": "WebSite",
        "@id": "https://jkdigital.in/#website",
        "url": "https://jkdigital.in",
        "name": "JK Digital Solutions",
        "description": "Digital Growth Machines - Website Development, SEO, Google Ads, and Branding",
        "publisher": {
          "@id": "https://jkdigital.in/#organization"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
