export default {
  "title": "House",
  "description": "A house is a building or structure designed for residential purposes. It includes various details like location, size, features, and price. This schema type can be used to represent standalone homes or single-family residences.",
  "keywords": ["real-estate", "real estate", "house", "residential property", "single-family home", "home for sale", "property for rent", "house listing"],
  "example": {
    "@type": "House",
    "name": "Sunnybrook Residence",
    "description": "A charming 3-bedroom, 2-bathroom home located in a quiet neighborhood with a spacious backyard, perfect for families. The house is well-maintained and has modern amenities.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Sunnybrook Lane",
      "addressLocality": "Sunnydale",
      "addressRegion": "CA",
      "postalCode": "90210",
      "addressCountry": "USA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "real estate agent"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "450000.00",
      "priceCurrency": "USD",
      "url": "https://www.sunnybrookhomes.com"
    },
    "bedrooms": 3,
    "bathrooms": 2,
    "floorSize": "2500 sqft",
    "lotSize": "0.25 acres",
    "propertyType": "Single-Family Home",
    "amenities": [
      "Spacious Backyard",
      "Modern Kitchen",
      "Air Conditioning",
      "Hardwood Floors",
      "Garage"
    ]
  }
}
