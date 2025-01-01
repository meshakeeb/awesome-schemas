export default {
  "title": "Place",
  "description": "Schema representing a specific location, which can include physical places such as a building, street, or city, or more abstract places such as a venue or a geographical region.",
  "category": ["places"],
  "keywords": ["places", "location", "region", "address", "site", "venue", "geographical area", "physical place", "city", "landmark"],
  "example": {
    "@type": "Place",
    "name": "Eiffel Tower",
    "description": "An iconic wrought-iron tower located on the Champ de Mars in Paris, France, and one of the most recognizable landmarks in the world.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Champ de Mars",
      "addressLocality": "Paris",
      "addressRegion": "Île-de-France",
      "postalCode": "75007",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.8584",
      "longitude": "2.2945"
    },
    "telephone": "+33 1 44 11 23 23",
    "url": "https://www.toureiffel.paris/en",
    "image": "https://www.example.com/images/eiffel_tower.jpg"
  }
}
