export default {
  "title": "Review",
  "description": "Schema representing a review, which includes the feedback, the rating, the reviewer’s details, and the item being reviewed.",
  "keywords": ["reviews-and-ratings", "reviews", "ratings", "customer review", "feedback", "testimonial", "product review", "service review"],
  "example": {
    "@type": "Review",
    "reviewBody": "The product is excellent with a high-quality build and fast performance. Highly recommend!",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5,
      "worstRating": 1
    },
    "author": {
      "@type": "Person",
      "name": "Jane Doe"
    },
    "datePublished": "2025-01-01",
    "itemReviewed": {
      "@type": "Product",
      "name": "Smartphone XYZ",
      "sku": "XYZ12345"
    }
  }
}
