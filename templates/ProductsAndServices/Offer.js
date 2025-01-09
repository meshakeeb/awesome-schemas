export default {
  "title": "Offer",
  "description": "Schema representing an offer for a product, service, or event, typically including details such as price, availability, and conditions of the offer. It can be used for promotions, discounts, or deals available to consumers.",
  "keywords": ["products-and-services", "products", "services", "offer", "deal", "discount", "promotion", "sale", "special offer", "price offer"],
  "example": {
    "@type": "Offer",
    "url": "https://www.example.com/product/laptop",
    "priceCurrency": "USD",
    "price": "899.99",
    "priceValidUntil": "2025-01-31",
    "itemOffered": {
      "@type": "Product",
      "name": "Laptop",
      "description": "A high-performance laptop with 16GB RAM and 512GB SSD.",
      "sku": "LP98765",
      "brand": {
        "@type": "Brand",
        "name": "TechPro"
      }
    },
    "eligibleRegion": {
      "@type": "Place",
      "name": "United States"
    },
    "eligibleQuantity": {
      "@type": "QuantitativeValue",
      "value": "50",
      "unitCode": "C62"
    },
    "seller": {
      "@type": "Organization",
      "name": "TechStore"
    }
  }
}
