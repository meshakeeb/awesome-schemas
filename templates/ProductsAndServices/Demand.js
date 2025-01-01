export default {
  "title": "Demand",
  "description": "Schema representing a demand for a product, service, or resource, indicating the need or desire for that product or service in the market. It can be used to describe supply and demand relationships in economics, or specific product/service demand in a market.",
  "category": ["products-and-services"],
  "keywords": ["products", "services", "demand", "market demand", "consumer need", "economic demand", "product demand", "service demand"],
  "example": {
    "@type": "Demand",
    "quantity": "500",
    "priceCurrency": "USD",
    "price": "49.99",
    "item": {
      "@type": "Product",
      "name": "Laptop",
      "description": "A high-performance laptop suitable for work and gaming.",
      "sku": "LP12345",
      "brand": {
        "@type": "Brand",
        "name": "TechPro"
      }
    },
    "demandSource": {
      "@type": "Organization",
      "name": "TechMarket Research"
    }
  }
}
