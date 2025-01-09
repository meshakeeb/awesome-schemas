export default {
  "title": "Warranty Promise",
  "description": "Schema representing a warranty promise for a product, including details about the terms, conditions, and duration of the warranty provided by the seller or manufacturer.",
  "keywords": ["order", "warranty promise", "product warranty", "guarantee", "warranty terms", "warranty conditions", "product return"],
  "example": {
    "@type": "WarrantyPromise",
    "warrantyScope": "Limited",
    "duration": "P1Y",
    "warrantyType": "Manufacturer Warranty",
    "url": "https://www.example.com/warranty",
    "eligibleRegion": {
      "@type": "Place",
      "name": "United States"
    },
    "termsAndConditions": "The product is covered for one year from the date of purchase for manufacturing defects. Does not cover accidental damage or misuse.",
    "warrantyCoverage": {
      "@type": "Product",
      "name": "Smartphone",
      "sku": "ABC123",
      "productID": "12345"
    },
    "offers": {
      "@type": "Offer",
      "price": {
        "@type": "MonetaryAmount",
        "value": "799.99",
        "currency": "USD"
      },
      "url": "https://www.example.com/smartphone"
    }
  }
}
