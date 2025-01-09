export default {
  "title": "Tourist Attraction",
  "description": "Schema representing a location or site that is of interest to tourists. These attractions may include landmarks, cultural sites, natural wonders, and entertainment venues.",
  "keywords": ["places", "tourist attraction", "landmark", "tourism", "historic site", "cultural site", "museum", "monument", "natural wonder", "entertainment venue", "destination"],
  "example": {
    "@type": "TouristAttraction",
    "name": "Grand Canyon",
    "description": "A massive, iconic canyon carved by the Colorado River in Arizona, known for its stunning views and geological significance.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Grand Canyon National Park",
      "addressLocality": "Grand Canyon",
      "addressRegion": "AZ",
      "postalCode": "86023",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1069",
      "longitude": "-112.1129"
    },
    "telephone": "+1 928-638-7888",
    "url": "https://www.nps.gov/grca/index.htm",
    "image": "https://www.example.com/images/grand_canyon.jpg",
    "touristType": "Natural Wonder",
    "openingHours": "08:00 AM - 06:00 PM",
    "priceRange": "$$$",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "35",
      "url": "https://www.example.com/tickets"
    }
  }
}
