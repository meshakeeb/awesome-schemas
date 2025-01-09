export default {
  "title": "Bus Station",
  "description": "Schema representing a bus station, a location where buses stop to pick up and drop off passengers. It includes information such as station name, location, and available services.",
  "keywords": ["places", "bus station", "public transport", "bus stop", "transportation hub", "commute", "station services"],
  "example": {
    "@type": "BusStation",
    "name": "Central Bus Station",
    "description": "A major bus terminal located in downtown with services to various regional and national destinations.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Main St",
      "addressLocality": "City Center",
      "addressRegion": "CA",
      "postalCode": "90001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.0522",
      "longitude": "-118.2437"
    },
    "url": "https://www.centralbusstation.com",
    "telephone": "+1 800-555-1234",
    "image": "https://www.example.com/images/bus_station.jpg",
    "hasFacility": [
      {
        "@type": "Facility",
        "name": "Ticket Counter"
      },
      {
        "@type": "Facility",
        "name": "Waiting Area"
      }
    ]
  }
}
