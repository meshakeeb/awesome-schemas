export default {
  "title": "Bus Trip",
  "description": "Schema representing a bus trip, including information about the departure and arrival locations, time, and the bus service provider.",
  "category": ["transportation"],
  "keywords": ["transportation", "bus trip", "bus service", "departure", "arrival", "travel"],
  "example": {
    "name": "Bus Trip from City A to City B",
    "url": "https://www.examplebuscompany.com/bus-trip/city-a-to-city-b",
    "description": "Book a bus trip from City A to City B with comfortable seating and amenities.",
    "publisher": {
      "name": "ExampleBusCompany",
      "url": "https://www.examplebuscompany.com",
      "logo": "https://www.examplebuscompany.com/logo.jpg"
    },
    "mainEntityOfPage": "https://www.examplebuscompany.com/bus-trip/city-a-to-city-b",
    "departureTime": "2025-01-10T08:00:00",
    "arrivalTime": "2025-01-10T12:00:00",
    "departureLocation": {
      "name": "City A Bus Station",
      "address": "123 Main St, City A, Country"
    },
    "arrivalLocation": {
      "name": "City B Bus Station",
      "address": "456 Elm St, City B, Country"
    },
    "busServiceProvider": {
      "name": "ExampleBusCompany",
      "url": "https://www.examplebuscompany.com"
    },
    "price": {
      "currency": "USD",
      "value": "29.99"
    },
    "bus": {
      "busType": "Luxury Coach",
      "seatingCapacity": 50,
      "amenities": [
        "Wi-Fi",
        "Air Conditioning",
        "Reclining Seats",
        "Power Outlets"
      ]
    },
    "sameAs": [
      "https://www.facebook.com/ExampleBusCompany",
      "https://www.twitter.com/ExampleBusCompany",
      "https://www.instagram.com/ExampleBusCompany"
    ],
    "keywords": ["bus trip", "transportation", "city travel", "luxury coach", "bus service"]
  }
}
