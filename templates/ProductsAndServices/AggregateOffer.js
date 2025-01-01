export default {
  "title": "Aggregate Offer",
  "description": "Schema representing an aggregate offer, typically used to display a collection of offers for a product or service from different providers. It summarizes the pricing and availability details from multiple sources.",
  "category": ["products-and-services"],
  "keywords": ["products", "services", "aggregate offer", "pricing", "offers", "discounts", "product price", "multi-supplier", "deal comparison"],
  "example": {
    "@type": "AggregateOffer",
    "url": "https://www.example.com/product",
    "offerCount": "5",
    "lowPrice": "19.99",
    "highPrice": "29.99",
    "priceCurrency": "USD",
    "offers": [
      {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "19.99",
        "url": "https://www.example.com/offer1",
        "seller": {
          "@type": "Organization",
          "name": "Seller A"
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "24.99",
        "url": "https://www.example.com/offer2",
        "seller": {
          "@type": "Organization",
          "name": "Seller B"
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "29.99",
        "url": "https://www.example.com/offer3",
        "seller": {
          "@type": "Organization",
          "name": "Seller C"
        }
      }
    ]
  }
}
