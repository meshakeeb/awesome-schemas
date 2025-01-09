export default {
  "title": "Flight",
  "description": "Schema representing a flight, including details about the departure and arrival locations, times, airline, and flight details.",
  "keywords": ["transportation", "flight", "airline", "departure", "arrival", "ticket", "travel"],
  "example": {
    "name": "Flight from New York to London",
    "url": "https://www.exampleairline.com/flight/new-york-to-london",
    "description": "Book a flight from New York to London with comfortable seating and in-flight services.",
    "publisher": {
      "name": "ExampleAirline",
      "url": "https://www.exampleairline.com",
      "logo": "https://www.exampleairline.com/logo.jpg"
    },
    "mainEntityOfPage": "https://www.exampleairline.com/flight/new-york-to-london",
    "departureTime": "2025-02-15T10:00:00",
    "arrivalTime": "2025-02-15T22:00:00",
    "departureLocation": {
      "name": "John F. Kennedy International Airport",
      "address": "Queens, New York, USA"
    },
    "arrivalLocation": {
      "name": "Heathrow Airport",
      "address": "London, UK"
    },
    "airline": {
      "name": "ExampleAirline",
      "url": "https://www.exampleairline.com"
    },
    "flightNumber": "EX123",
    "price": {
      "currency": "USD",
      "value": "799.99"
    },
    "seat": {
      "class": "Economy",
      "availability": "Available"
    },
    "baggageAllowance": {
      "carryOn": "1 bag, 7kg",
      "checked": "2 bags, 20kg"
    },
    "sameAs": [
      "https://www.facebook.com/ExampleAirline",
      "https://www.twitter.com/ExampleAirline",
      "https://www.instagram.com/ExampleAirline"
    ],
    "keywords": ["flight", "airline", "ticket", "international travel", "New York to London"]
  }
}
