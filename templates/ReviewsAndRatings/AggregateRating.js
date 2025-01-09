export default {
  "title": "Aggregate Rating",
  "description": "Schema representing an aggregate rating, which includes the overall rating of an item or service based on multiple individual ratings and reviews.",
  "keywords": ["reviews-and-ratings", "reviews", "ratings", "aggregate rating", "average rating", "customer feedback", "rating system", "evaluation"],
  "example": {
    "@type": "AggregateRating",
    "ratingValue": 4.5,
    "reviewCount": 1500,
    "bestRating": 5,
    "worstRating": 1,
    "additionalType": "https://schema.org/Rating",
    "itemReviewed": {
      "@type": "Product",
      "name": "Smartphone XYZ",
      "description": "Latest model of Smartphone XYZ with advanced features.",
      "sku": "XYZ12345"
    }
  }
}
