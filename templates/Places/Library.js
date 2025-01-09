export default {
  "title": "Library",
  "description": "Schema representing a library, a public or private institution that provides access to books, media, and other resources for reading, study, or research. Libraries often offer digital content, educational programs, and public services.",
  "keywords": ["places", "library", "book collection", "research facility", "public library", "digital library", "media resources", "reading", "study", "education", "learning"],
  "example": {
    "@type": "Library",
    "name": "City Central Library",
    "description": "A public library offering a wide range of books, educational resources, and digital media for the community.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "456 Library Lane",
      "addressLocality": "Booktown",
      "addressRegion": "CA",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "telephone": "+1 555-555-1234",
    "url": "https://www.citylibrary.com",
    "image": "https://www.example.com/images/city_library.jpg",
    "offers": {
      "@type": "Offer",
      "url": "https://www.citylibrary.com/catalog",
      "priceCurrency": "USD"
    }
  }
}
