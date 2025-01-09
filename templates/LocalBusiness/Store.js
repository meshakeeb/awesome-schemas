export default {
  "title": "Store",
  "description": "Schema representing a store, including information about the types of products offered, location, contact details, and services provided.",
  "keywords": ["local-business", "local business", "store", "retail", "shopping", "products", "commerce", "store business", "ecommerce", "retail shop"],
  "example": {
    "name": "Tech Gadgets Shop",
    "url": "https://www.techgadgetsshop.com",
    "logo": "https://www.techgadgetsshop.com/logo.png",
    "description": "Tech Gadgets Shop offers a wide range of the latest technology products, including smartphones, laptops, smartwatches, and accessories. Our mission is to provide high-quality gadgets at competitive prices while offering excellent customer service.",
    "products": [
      {
        "name": "Smartphone X12",
        "description": "Latest model with a 6.7-inch display, 128GB storage, and 5G connectivity.",
        "price": "899.99",
        "currency": "USD"
      },
      {
        "name": "Laptop Pro 15",
        "description": "High-performance laptop with a 15-inch Retina display, Intel i7 processor, and 16GB RAM.",
        "price": "1299.99",
        "currency": "USD"
      },
      {
        "name": "Smartwatch Z7",
        "description": "Stylish smartwatch with heart rate monitoring, GPS, and fitness tracking features.",
        "price": "199.99",
        "currency": "USD"
      }
    ],
    "address": {
      "streetAddress": "123 Gadget Avenue",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94110",
      "addressCountry": "US"
    },
    "contactPoint": {
      "contactType": "Customer Support",
      "telephone": "+1-800-555-4567",
      "email": "support@techgadgetsshop.com"
    },
    "openingHours": {
      "monday": "09:00-18:00",
      "tuesday": "09:00-18:00",
      "wednesday": "09:00-18:00",
      "thursday": "09:00-18:00",
      "friday": "09:00-19:00",
      "saturday": "10:00-19:00",
      "sunday": "Closed"
    },
    "socialMedia": {
      "facebook": "https://www.facebook.com/TechGadgetsShop",
      "twitter": "https://twitter.com/TechGadgetsShop",
      "instagram": "https://www.instagram.com/TechGadgetsShop"
    },
    "paymentAccepted": ["Credit Card", "PayPal", "Apple Pay"],
    "priceRange": "$$$"
  }
}
