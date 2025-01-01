export default {
  "title": "Trip",
  "description": "Schema representing a trip, including details about the destination, duration, type of trip, and travel arrangements.",
  "category": ["tourism"],
  "keywords": ["tourism", "trip", "vacation", "holiday", "destination", "itinerary", "travel plans", "journey"],
  "example": {
    "name": "Weekend Getaway to Paris",
    "url": "https://www.exampletrip.com/weekend-getaway-paris",
    "description": "A relaxing weekend trip to Paris, including sightseeing, local cuisine, and iconic landmarks like the Eiffel Tower.",
    "departurePlace": {
      "name": "New York City",
      "address": "New York, NY, USA"
    },
    "arrivalPlace": {
      "name": "Paris",
      "address": "Paris, France"
    },
    "departureDate": "2025-05-01T10:00:00",
    "arrivalDate": "2025-05-01T22:00:00",
    "returnDate": "2025-05-03T18:00:00",
    "tripType": "Vacation",
    "travelMode": ["Flight", "Public Transport"],
    "itinerary": [
      "Visit the Eiffel Tower",
      "Explore the Louvre Museum",
      "Stroll along the Seine River",
      "Try French pastries"
    ],
    "price": {
      "currency": "USD",
      "value": "1500.00"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "1500.00",
      "priceType": "Total Trip",
      "url": "https://www.exampletrip.com/book-now"
    },
    "sameAs": [
      "https://www.facebook.com/exampletrip",
      "https://www.instagram.com/exampletrip",
      "https://www.twitter.com/exampletrip"
    ],
    "keywords": ["trip", "vacation", "Paris", "weekend getaway", "tour", "travel"]
  }
}
