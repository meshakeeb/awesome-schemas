export default {
  "title": "Service",
  "description": "Schema representing a service, which can be any type of intangible offering provided to a consumer or business, such as consulting, maintenance, or digital services.",
  "category": ["products-and-services"],
  "keywords": ["products", "services", "consulting", "maintenance", "repair", "digital service", "software service"],
  "example": {
    "@type": "Service",
    "name": "Web Design Service",
    "description": "A professional web design service offering custom website development for businesses and individuals, including responsive design and SEO optimization.",
    "provider": {
      "@type": "Organization",
      "name": "CreativeWeb Solutions"
    },
    "serviceType": "Web Design",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "1200.00",
      "priceValidUntil": "2025-12-31"
    },
    "areaServed": {
      "@type": "Place",
      "name": "United States"
    },
    "serviceOutput": {
      "@type": "Product",
      "name": "Custom Website"
    }
  }
}
