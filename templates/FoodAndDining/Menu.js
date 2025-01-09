export default {
  "title": "Menu",
  "description": "Schema representing a menu, typically associated with a food establishment. It includes details about the available food items, their descriptions, and prices.",
  "keywords": ["food-and-dining", "food", "dining", "menu", "restaurant menu", "food items", "meal options", "menu list", "dining options"],
  "example": {
    "menuName": "Gourmet Bistro Menu",
    "restaurant": "The Gourmet Bistro",
    "location": "123 Culinary St, New York, NY 10001, USA",
    "items": [
      {
        "name": "Grilled Salmon",
        "description": "Fresh grilled salmon with garlic butter, served with seasonal vegetables.",
        "price": "$18.99",
        "category": "Main Course"
      },
      {
        "name": "Vegetarian Pasta",
        "description": "A hearty pasta dish with roasted vegetables and a rich marinara sauce.",
        "price": "$14.49",
        "category": "Main Course"
      },
      {
        "name": "Chocolate Lava Cake",
        "description": "Warm molten chocolate cake served with vanilla ice cream.",
        "price": "$6.99",
        "category": "Dessert"
      },
      {
        "name": "Caesar Salad",
        "description": "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing.",
        "price": "$7.49",
        "category": "Appetizer"
      },
      {
        "name": "Margarita Pizza",
        "description": "Classic pizza with mozzarella, tomato sauce, and fresh basil.",
        "price": "$12.99",
        "category": "Pizza"
      }
    ],
    "cuisine": "American",
    "features": ["Vegetarian Options", "Gluten-Free Options", "Vegan Options"],
    "specials": [
      {
        "name": "Chef’s Special - Lobster Bisque",
        "description": "Rich and creamy lobster bisque made with fresh lobster and cream.",
        "price": "$9.99"
      }
    ],
    "dietaryRestrictions": ["Vegetarian", "Gluten-Free", "Dairy-Free"],
    "officialWebsite": "https://www.thegourmetbistro.com/menu"
  }
}
