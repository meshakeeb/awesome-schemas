export default {
  "title": "Park",
  "description": "Schema representing a public park or garden, an outdoor space typically designed for recreational activities, leisure, and enjoyment of nature. Parks often feature walking paths, play areas, green spaces, and various amenities.",
  "category": ["places"],
  "keywords": ["places", "park", "recreation", "green space", "outdoor", "leisure", "nature", "public space", "garden", "walking paths", "picnic areas"],
  "example": {
    "@type": "Park",
    "name": "Sunset Park",
    "description": "A large public park offering walking trails, sports facilities, picnic areas, and beautiful views of the city skyline.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "789 Park Avenue",
      "addressLocality": "Greenfield",
      "addressRegion": "CA",
      "postalCode": "67890",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.0522",
      "longitude": "-118.2437"
    },
    "telephone": "+1 555-555-6789",
    "url": "https://www.sunsetpark.com",
    "image": "https://www.example.com/images/sunset_park.jpg",
    "amenityFeature": [
      {
        "@type": "Facility",
        "name": "Playground",
        "feature": "Children's play area with swings and slides."
      },
      {
        "@type": "Facility",
        "name": "Sports Court",
        "feature": "Tennis and basketball courts available for public use."
      }
    ]
  }
}
