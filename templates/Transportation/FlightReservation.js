export default {
  "title": "Flight Reservation",
  "description": "Schema representing a flight reservation, including details about the flight, reservation status, passenger details, and payment.",
  "category": ["transportation"],
  "keywords": ["transportation", "flight reservation", "booking", "airline", "ticket", "passenger", "payment", "travel"],
  "example": {
    "name": "Flight Reservation for New York to London",
    "url": "https://www.exampleairline.com/reservation/new-york-to-london",
    "description": "Confirm your flight reservation from New York to London with ExampleAirline.",
    "publisher": {
      "name": "ExampleAirline",
      "url": "https://www.exampleairline.com",
      "logo": "https://www.exampleairline.com/logo.jpg"
    },
    "mainEntityOfPage": "https://www.exampleairline.com/reservation/new-york-to-london",
    "reservationFor": {
      "@type": "Flight",
      "flightNumber": "EX123",
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
      }
    },
    "reservationStatus": "Confirmed",
    "reservationId": "ABC1234567",
    "priceCurrency": "USD",
    "price": "799.99",
    "passenger": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "+1-555-555-5555"
    },
    "paymentStatus": "Paid",
    "paymentMethod": "Credit Card",
    "ticket": {
      "ticketNumber": "1234567890",
      "ticketed": true
    },
    "sameAs": [
      "https://www.facebook.com/ExampleAirline",
      "https://www.twitter.com/ExampleAirline",
      "https://www.instagram.com/ExampleAirline"
    ],
    "keywords": ["flight reservation", "ticket booking", "airline", "passenger details", "payment"]
  }
}
