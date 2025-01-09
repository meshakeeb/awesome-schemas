export default {
  "title": "Land Form",
  "description": "Schema representing a natural physical feature of the Earth's surface, such as mountains, valleys, hills, or plains. Landforms can be a result of geological processes such as erosion, weathering, and tectonic movements.",
  "keywords": ["places", "landform", "mountain", "valley", "hill", "plain", "geography", "natural feature", "earth's surface", "geological process"],
  "example": {
    "@type": "Landform",
    "name": "Grand Canyon",
    "description": "A massive canyon carved by the Colorado River, known for its dramatic geological formations and stunning views.",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1069",
      "longitude": "-112.1129"
    },
    "location": {
      "@type": "Place",
      "name": "Grand Canyon National Park",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Grand Canyon Village",
        "addressRegion": "AZ",
        "postalCode": "86023",
        "addressCountry": "US"
      }
    },
    "image": "https://www.example.com/images/grand_canyon.jpg",
    "category": ["Canyon", "Natural Wonder"]
  }
}
