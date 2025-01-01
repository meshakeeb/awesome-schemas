export default {
  "title": "Real Estate Listing",
  "description": "A real estate listing represents a property that is available for sale, rent, or lease. It includes detailed information about the property such as location, price, features, and agent details.",
  "category": ["real-estate"],
  "keywords": ["real estate", "real estate listing", "property for sale", "home for sale", "real estate listing details", "buy house", "rent property", "real estate market"],
  "example": {
    "@type": "RealEstateListing",
    "name": "Sunnydale Family Home",
    "description": "A charming 3-bedroom, 2-bathroom home in the heart of Sunnydale. The property features a spacious backyard, modern kitchen, and a two-car garage.",
    "url": "https://www.johndoerealty.com/listings/sunnydale-family-home",
    "image": "https://www.johndoerealty.com/images/sunnydale-home.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Maple Ave.",
      "addressLocality": "Sunnydale",
      "addressRegion": "CA",
      "postalCode": "90210",
      "addressCountry": "USA"
    },
    "priceCurrency": "USD",
    "price": "350000",
    "numberOfRooms": 5,
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": 2200,
      "unitCode": "FTK"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "350000",
      "priceValidUntil": "2025-01-01",
      "url": "https://www.johndoerealty.com/listings/sunnydale-family-home"
    },
    "agent": {
      "@type": "RealEstateAgent",
      "name": "John Doe Realty",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-789-1234",
        "contactType": "Customer Service"
      }
    },
    "propertyDetails": {
      "numberOfBedrooms": 3,
      "numberOfBathrooms": 2,
      "amenities": ["backyard", "garage", "modern kitchen", "fireplace"]
    }
  }
}
