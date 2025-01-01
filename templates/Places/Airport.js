export default {
  "title": "Airport",
  "description": "Schema representing an airport, a location where aircraft can land, take off, and park. It includes information such as airport name, IATA code, location, facilities, and services available.",
  "category": ["places"],
  "keywords": ["places", "airport", "aviation", "travel", "flight", "IATA code", "terminal", "airport services"],
  "example": {
    "@type": "Airport",
    "name": "John F. Kennedy International Airport",
    "description": "An international airport located in Queens, New York. It is one of the busiest airports in the United States and serves as a hub for international flights.",
    "iataCode": "JFK",
    "icaoCode": "KJFK",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "JFK Access Rd",
      "addressLocality": "Queens",
      "addressRegion": "NY",
      "postalCode": "11430",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.6413",
      "longitude": "-73.7781"
    },
    "url": "https://www.jfkairport.com",
    "telephone": "+1 718-244-4444",
    "image": "https://www.example.com/images/jfk_airport.jpg"
  }
}
