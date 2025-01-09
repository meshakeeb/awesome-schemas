export default {
  "title": "Commercial Property",
  "description": "Schema representing a commercial property, which is a building or space used for business purposes, such as office buildings, retail spaces, warehouses, and industrial properties. It includes information like property type, location, availability, and pricing.",
  "keywords": ["real-estate", "real estate", "commercial property", "business space", "office space", "retail space", "industrial property", "property for lease"],
  "example": {
    "@type": "CommercialProperty",
    "name": "Downtown Office Space",
    "description": "A prime office space located in the heart of downtown with modern amenities, perfect for small businesses or startups. The space is fully equipped with high-speed internet, conference rooms, and flexible lease terms.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "456 Business Avenue",
      "addressLocality": "Metropolis",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "USA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-765-4321",
      "contactType": "property manager"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "3500.00",
      "priceFrequency": "MONTH",
      "url": "https://www.downtownoffices.com"
    },
    "propertyType": "Office Space",
    "floorSize": "2000 sqft",
    "amenities": [
      "High-Speed Internet",
      "Conference Rooms",
      "24/7 Access",
      "Parking Space",
      "Flexible Lease Terms"
    ]
  }
}
