export default {
  "title": "Local Business",
  "description": "Schema representing a local business, typically a business operating within a specific geographic area, such as a retail store, service provider, or restaurant. This includes details such as the name, address, contact information, and types of services offered.",
  "keywords": ["organizations", "local business", "small business", "service provider", "retail store", "restaurant", "local service"],
  "example": {
    "@type": "LocalBusiness",
    "name": "Joe's Coffee Shop",
    "legalName": "Joe's Coffee Shop Inc.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Springfield",
      "addressRegion": "IL",
      "postalCode": "62701",
      "addressCountry": "US"
    },
    "telephone": "+1-217-555-1234",
    "email": "contact@joescoffee.com",
    "sameAs": "https://www.joescoffee.com",
    "url": "https://www.joescoffee.com",
    "logo": "https://www.joescoffee.com/logo.png",
    "priceRange": "$",
    "servesCuisine": "Coffee, Pastries",
    "menu": {
      "@type": "Menu",
      "name": "Coffee Menu",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Espresso",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "3.50"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Cappuccino",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "4.00"
          }
        }
      ]
    },
    "employee": {
      "@type": "Person",
      "name": "Joe Smith",
      "jobTitle": "Owner"
    }
  }
}
