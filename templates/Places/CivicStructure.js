export default {
  "title": "Civic Structure",
  "description": "Schema representing a civic structure, which refers to a public building or facility typically used by local governments or communities. This includes buildings such as town halls, government offices, courthouses, and libraries.",
  "keywords": ["places", "civic structure", "public building", "government building", "town hall", "courthouse", "library", "community center"],
  "example": {
    "@type": "CivicStructure",
    "name": "City Hall",
    "description": "The central administrative building for the local government, housing offices and services for the city's residents.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Cityville",
      "addressRegion": "CA",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.7749",
      "longitude": "-122.4194"
    },
    "url": "https://www.cityhall.com",
    "telephone": "+1 555-555-5555",
    "image": "https://www.example.com/images/city_hall.jpg",
    "hasPart": [
      {
        "@type": "GovernmentOffice",
        "name": "City Council Office"
      },
      {
        "@type": "GovernmentOffice",
        "name": "Public Records Office"
      }
    ]
  }
}
