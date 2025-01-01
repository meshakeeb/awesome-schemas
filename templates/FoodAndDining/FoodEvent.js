export default {
  "title": "Food Event",
  "description": "Schema representing an event centered around food, such as food festivals, cooking classes, or food tastings. It includes details like the event name, location, date, and related food themes.",
  "category": ["events", "food-and-dining"],
  "keywords": ["food", "dining", "food event", "food festival", "cooking class", "food tasting", "gastronomy", "culinary event", "food celebration"],
  "example": {
    "eventName": "Gourmet Food Festival",
    "organizer": "Foodie Events Co.",
    "location": "Central Park, New York, NY 10001, USA",
    "startDate": "2024-06-15T12:00:00Z",
    "endDate": "2024-06-15T18:00:00Z",
    "eventType": "Food Festival",
    "description": "A celebration of culinary arts, featuring top chefs, food trucks, cooking demonstrations, and food tasting stations.",
    "tickets": {
      "generalAdmission": "$25",
      "VIP": "$50",
      "children": "Free"
    },
    "schedule": [
      {
        "date": "2024-06-15",
        "time": "12:00",
        "event": "Opening Ceremony",
        "description": "Welcome speech and opening of food stalls."
      },
      {
        "date": "2024-06-15",
        "time": "13:00",
        "event": "Cooking Demo: Street Food",
        "description": "A live demonstration on creating popular street food dishes."
      },
      {
        "date": "2024-06-15",
        "time": "15:00",
        "event": "Food Tasting: International Flavors",
        "description": "Tasting stations featuring dishes from around the world."
      }
    ],
    "relatedEvents": [
      {
        "eventName": "Vegan Food Fair",
        "url": "https://www.veganfoodfair.com"
      },
      {
        "eventName": "Chef’s Cooking Class",
        "url": "https://www.chefsclass.com"
      }
    ],
    "officialWebsite": "https://www.gourmetfoodfestival.com"
  }
}
