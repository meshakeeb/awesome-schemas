export default {
  "title": "Apartment Complex",
  "description": "Schema representing an apartment complex, which is a residential building or group of buildings containing multiple individual apartments or units. It includes information such as the complex's name, address, amenities, and contact information.",
  "keywords": ["real-estate", "real estate", "apartment complex", "residential complex", "apartments", "housing", "residential buildings"],
  "example": {
    "@type": "ApartmentComplex",
    "name": "Greenwood Apartments",
    "description": "A modern apartment complex offering spacious one and two-bedroom apartments with luxury amenities, including a fitness center, pool, and 24-hour security.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 Oakwood Drive",
      "addressLocality": "Greenwood City",
      "addressRegion": "CA",
      "postalCode": "90001",
      "addressCountry": "USA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-123-4567",
      "contactType": "customer service"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "1500.00",
      "priceFrequency": "MONTH",
      "url": "https://www.greenwoodapartments.com"
    },
    "amenities": [
      "Fitness Center",
      "Swimming Pool",
      "On-site Parking",
      "Pet-Friendly",
      "24-hour Security"
    ]
  }
}
