export default {
  "title": "Checkout Page",
  "description": "Schema representing a checkout page for e-commerce websites where users finalize their purchase, including payment options, order summary, and shipping details.",
  "category": ["webpage"],
  "keywords": ["webpage", "checkout", "payment", "order summary", "e-commerce", "purchase", "cart"],
  "example": {
    "name": "Checkout - ExampleStore",
    "url": "https://www.examplestore.com/checkout",
    "description": "Finalize your purchase with ExampleStore by reviewing your order, providing shipping details, and completing the payment process.",
    "publisher": {
      "name": "ExampleStore",
      "url": "https://www.examplestore.com",
      "logo": "https://www.examplestore.com/logo.jpg"
    },
    "mainEntityOfPage": "https://www.examplestore.com/checkout",
    "orderNumber": "123456789",
    "orderStatus": "Pending",
    "paymentMethod": {
      "name": "Credit Card",
      "url": "https://www.examplestore.com/payment",
      "description": "Secure payment via credit card"
    },
    "totalPrice": {
      "currency": "USD",
      "value": "99.99"
    },
    "billingAddress": {
      "streetAddress": "123 Main St",
      "addressLocality": "Springfield",
      "addressRegion": "IL",
      "postalCode": "62701",
      "addressCountry": "US"
    },
    "shippingAddress": {
      "streetAddress": "456 Elm St",
      "addressLocality": "Springfield",
      "addressRegion": "IL",
      "postalCode": "62702",
      "addressCountry": "US"
    },
    "cartItems": [
      {
        "name": "Laptop",
        "sku": "ABC123",
        "price": {
          "currency": "USD",
          "value": "799.99"
        },
        "quantity": 1,
        "image": "https://www.examplestore.com/images/laptop.jpg"
      },
      {
        "name": "Mouse",
        "sku": "DEF456",
        "price": {
          "currency": "USD",
          "value": "29.99"
        },
        "quantity": 1,
        "image": "https://www.examplestore.com/images/mouse.jpg"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/ExampleStore",
      "https://www.twitter.com/ExampleStore",
      "https://www.instagram.com/ExampleStore"
    ],
    "keywords": ["checkout", "order summary", "shipping", "payment"],
    "paymentStatus": "Pending"
  }
}
