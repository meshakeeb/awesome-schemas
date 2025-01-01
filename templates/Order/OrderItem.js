export default {
  "title": "Order Item",
  "description": "Schema representing an item within an order, including details about the product, quantity, price, and associated order information.",
  "category": ["order"],
  "keywords": ["order", "order item", "product", "quantity", "price", "order details", "item in order"],
  "example": {
    "@type": "OrderItem",
    "name": "Wireless Mouse",
    "sku": "WM12345",
    "productID": "12345",
    "price": {
      "@type": "MonetaryAmount",
      "value": "25.99",
      "currency": "USD"
    },
    "quantity": 2,
    "orderItemStatus": "Shipped",
    "url": "https://www.example.com/products/wireless-mouse",
    "image": "https://www.example.com/images/wireless-mouse.jpg",
    "additionalType": "https://schema.org/Product",
    "seller": {
      "@type": "Organization",
      "name": "Example Electronics"
    }
  }
}
