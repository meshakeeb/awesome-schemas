export default {
  "title": "Food Establishment",
  "description": "Schema representing a food establishment, such as a restaurant, cafe, or food truck, including details like name, location, menu, and hours of operation.",
  "keywords": ["food-and-dining", "food", "dining", "restaurant", "cafe", "food truck", "menu", "food establishment", "eatery", "gourmet"],
  "example": {
    "name": "The Gourmet Bistro",
    "type": "Restaurant",
    "location": "123 Culinary St, New York, NY 10001, USA",
    "telephone": "+1 555-123-4567",
    "openingHours": {
      "monday": "10:00 AM - 10:00 PM",
      "tuesday": "10:00 AM - 10:00 PM",
      "wednesday": "10:00 AM - 10:00 PM",
      "thursday": "10:00 AM - 10:00 PM",
      "friday": "10:00 AM - 11:00 PM",
      "saturday": "10:00 AM - 11:00 PM",
      "sunday": "Closed"
    },
    "menu": [
      {
        "itemName": "Grilled Salmon",
        "description": "Fresh grilled salmon with garlic butter, served with seasonal vegetables.",
        "price": "$18.99"
      },
      {
        "itemName": "Vegetarian Pasta",
        "description": "A hearty pasta dish with roasted vegetables and a rich marinara sauce.",
        "price": "$14.49"
      },
      {
        "itemName": "Chocolate Lava Cake",
        "description": "Warm molten chocolate cake served with vanilla ice cream.",
        "price": "$6.99"
      }
    ],
    "cuisine": "American",
    "features": ["Outdoor Seating", "Free WiFi", "Pet Friendly", "Takeout Available"],
    "paymentMethods": ["Credit Card", "Cash", "Mobile Payments"],
    "relatedEstablishments": [
      {
        "name": "Bistro Delight",
        "location": "456 Culinary Rd, New York, NY 10001, USA",
        "url": "https://www.bistrodelight.com"
      },
      {
        "name": "The Dining Room",
        "location": "789 Dining Ave, New York, NY 10001, USA",
        "url": "https://www.thediningroom.com"
      }
    ],
    "officialWebsite": "https://www.thegourmetbistro.com"
  }
}
