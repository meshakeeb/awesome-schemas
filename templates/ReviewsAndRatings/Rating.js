export default {
  "title": "Rating",
  "description": "Schema representing an individual rating, which includes the rating value, the reviewer's experience, and additional feedback provided by the reviewer.",
  "category": ["reviews-and-ratings"],
  "keywords": ["reviews", "ratings", "feedback", "evaluation", "customer review", "star rating", "user feedback"],
  "example": {
    "@type": "Rating",
    "ratingValue": 4,
    "bestRating": 5,
    "worstRating": 1,
    "reviewAspect": "Quality",
    "author": {
      "@type": "Person",
      "name": "John Doe"
    },
    "reviewBody": "The product is good, but the battery life could be improved.",
    "datePublished": "2025-01-01",
    "itemReviewed": {
      "@type": "Product",
      "name": "Smartphone XYZ",
      "sku": "XYZ12345"
    }
  }
}
