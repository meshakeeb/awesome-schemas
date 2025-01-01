export default {
  "title": "Shopping Center",
  "description": "Schema representing a shopping center or mall, which includes details about the shopping center's name, location, businesses, and services available within.",
  "category": ["retail-and-commerce"],
  "keywords": ["retail", "commerce", "shopping center", "mall", "businesses", "store", "shopping", "services"],
  "example": {
    "@type": "ShoppingCenter",
    "name": "Anytown Mall",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Mall Road",
      "addressLocality": "Anytown",
      "addressRegion": "CA",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "telephone": "+1-123-456-7890",
    "url": "https://www.anytownmall.com",
    "openingHours": "Mo-Su 10:00-22:00",
    "containedInPlace": {
      "@type": "Place",
      "name": "Anytown"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Special Discount on Electronics",
        "priceCurrency": "USD",
        "price": "100.00",
        "eligibleRegion": {
          "@type": "Place",
          "name": "Anytown"
        }
      }
    ],
    "business": [
      {
        "@type": "Store",
        "name": "Electronics Store",
        "productCategory": "Electronics",
        "url": "https://www.electronicsstore.com",
        "telephone": "+1-123-456-7891"
      },
      {
        "@type": "Store",
        "name": "Fashion Boutique",
        "productCategory": "Clothing",
        "url": "https://www.fashionboutique.com",
        "telephone": "+1-123-456-7892"
      }
    ]
  }
}
