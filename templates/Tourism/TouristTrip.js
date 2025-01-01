export default {
  "title": "Tourist Trip",
  "description": "Schema representing a tourist trip, including details about the destination, duration, type of trip, attractions, and travel arrangements specifically for tourists.",
  "category": ["tourism"],
  "keywords": ["tourism", "tourist trip", "vacation", "holiday", "destination", "attractions", "sightseeing", "journey"],
  "example": {
    "name": "Historic Tour of Rome",
    "url": "https://www.exampletouristtrip.com/historic-tour-rome",
    "description": "A guided historic tour of Rome, visiting famous landmarks such as the Colosseum, Roman Forum, and Vatican City.",
    "departurePlace": {
      "name": "Rome International Airport",
      "address": "Rome, Italy"
    },
    "arrivalPlace": {
      "name": "Colosseum",
      "address": "Piazza del Colosseo, 1, 00184 Roma RM, Italy"
    },
    "departureDate": "2025-06-01T09:00:00",
    "arrivalDate": "2025-06-01T10:00:00",
    "returnDate": "2025-06-07T18:00:00",
    "tripType": "Tourist",
    "attractions": [
      "Colosseum",
      "Roman Forum",
      "Vatican City",
      "Pantheon",
      "Piazza Navona"
    ],
    "itinerary": [
      "Day 1: Arrival and Colosseum Tour",
      "Day 2: Roman Forum and Palatine Hill",
      "Day 3: Vatican City and Sistine Chapel",
      "Day 4: Pantheon and Piazza Navona",
      "Day 5-6: Free time for shopping and exploring",
      "Day 7: Departure"
    ],
    "price": {
      "currency": "USD",
      "value": "1200.00"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "1200.00",
      "priceType": "Per Person",
      "url": "https://www.exampletouristtrip.com/book-now"
    },
    "sameAs": [
      "https://www.facebook.com/exampletouristtrip",
      "https://www.instagram.com/exampletouristtrip",
      "https://www.twitter.com/exampletouristtrip"
    ],
    "keywords": ["Rome", "tourist trip", "historic tour", "vacation", "Italy", "Colosseum", "Vatican"]
  }
}
