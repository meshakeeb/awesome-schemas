export default {
  "title": "Order",
  "description": "Schema representing an order placed by a customer, which includes details about the items ordered, payment status, shipping details, and the total cost of the order.",
  "keywords": ["retail-and-commerce", "retail", "commerce", "order", "purchase", "transaction", "sales order", "shipping", "payment", "customer order"],
  "example": {
    "@type": "Order",
    "orderNumber": "ORD123456",
    "dateOrdered": "2025-01-01",
    "orderStatus": "Shipped",
    "paymentMethod": "Credit Card",
    "totalPrice": {
      "@type": "MonetaryAmount",
      "value": 200.00,
      "currency": "USD"
    },
    "orderItem": [
      {
        "@type": "OrderItem",
        "name": "Smartphone XYZ",
        "quantity": 1,
        "price": {
          "@type": "MonetaryAmount",
          "value": 150.00,
          "currency": "USD"
        }
      },
      {
        "@type": "OrderItem",
        "name": "Phone Case",
        "quantity": 1,
        "price": {
          "@type": "MonetaryAmount",
          "value": 50.00,
          "currency": "USD"
        }
      }
    ],
    "shippingAddress": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Anytown",
      "addressRegion": "CA",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "billingAddress": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Anytown",
      "addressRegion": "CA",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "seller": {
      "@type": "Organization",
      "name": "Example Store",
      "logo": "https://example.com/logo.png"
    }
  }
}
