export default {
  "title": "Bar Or Pub",
  "description": "Schema representing a bar or pub, detailing the type of establishment, the services it offers, its location, and any additional information such as opening hours, menu, and special events.",
  "keywords": ["local-business", "local business", "bar", "pub", "cocktails", "drinks", "beer", "happy hour", "live music", "nightlife"],
  "example": {
    "name": "The Oak Tavern",
    "url": "https://www.theoaktavern.com",
    "logo": "https://www.theoaktavern.com/logo.png",
    "description": "The Oak Tavern is a cozy pub offering a wide variety of craft beers, signature cocktails, and classic pub food. Enjoy a relaxed atmosphere with live music every weekend and happy hour specials throughout the week.",
    "menu": [
      {
        "name": "Oak Burger",
        "description": "A juicy beef patty with lettuce, tomato, and Oak sauce, served with crispy fries.",
        "price": "12.99",
        "currency": "USD"
      },
      {
        "name": "Craft Beer Flight",
        "description": "A selection of 4 craft beers of your choice from local breweries.",
        "price": "15.99",
        "currency": "USD"
      }
    ],
    "address": {
      "streetAddress": "456 Oak Street",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10010",
      "addressCountry": "US"
    },
    "contactPoint": {
      "contactType": "Customer Support",
      "telephone": "+1-800-123-4567",
      "email": "info@theoaktavern.com"
    },
    "openingHours": {
      "monday": "17:00-00:00",
      "tuesday": "17:00-00:00",
      "wednesday": "17:00-00:00",
      "thursday": "17:00-01:00",
      "friday": "17:00-02:00",
      "saturday": "17:00-02:00",
      "sunday": "Closed"
    },
    "specialEvents": [
      {
        "eventType": "Live Music",
        "description": "Join us every Friday and Saturday night for live performances by local bands.",
        "startDate": "2025-01-01T20:00:00",
        "endDate": "2025-01-01T23:59:59"
      },
      {
        "eventType": "Trivia Night",
        "description": "Test your knowledge every Wednesday at our trivia night with fun prizes.",
        "startDate": "2025-01-07T19:00:00",
        "endDate": "2025-01-07T21:00:00"
      }
    ],
    "socialMedia": {
      "facebook": "https://www.facebook.com/TheOakTavern",
      "twitter": "https://twitter.com/TheOakTavern",
      "instagram": "https://www.instagram.com/TheOakTavern"
    }
  }
}
