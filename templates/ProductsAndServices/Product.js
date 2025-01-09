export default {
  "title": "Product",
  "description": "Schema representing a product, which can be a physical or digital item sold or provided to consumers. It includes details such as the product's name, description, price, SKU, and brand.",
  "keywords": ["products-and-services", "products", "services", "item", "goods", "merchandise", "physical product", "digital product"],
  "example": {
    "@type": "Product",
    "name": "Laptop",
    "description": "A high-performance laptop suitable for work and gaming, featuring 16GB RAM, 512GB SSD, and a 15.6-inch display.",
    "sku": "LP12345",
    "brand": {
      "@type": "Brand",
      "name": "TechPro"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "899.99",
      "url": "https://www.example.com/product/laptop"
    },
    "category": "Electronics",
    "image": "https://www.example.com/images/laptop.jpg",
    "manufacturer": {
      "@type": "Organization",
      "name": "TechPro"
    }
  }
}
