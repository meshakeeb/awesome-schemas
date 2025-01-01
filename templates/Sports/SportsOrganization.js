export default {
  "title": "Sports Organization",
  "description": "Schema representing a sports organization, detailing its name, type, members, and other relevant data such as events, sponsorships, and teams involved in various sports activities.",
  "category": ["sports"],
  "keywords": ["sports", "sports organization", "team", "league", "sports association", "athletic club", "sports federation", "professional sports"],
  "example": {
    "name": "National Football League (NFL)",
    "url": "https://www.nfl.com",
    "description": "The National Football League (NFL) is a professional American football league, consisting of 32 teams. It is widely considered the premier professional American football league in the world.",
    "founder": "George Halas, 1920",
    "sport": "American Football",
    "league": "National Football League",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "345 Park Avenue",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10022",
      "addressCountry": "USA"
    },
    "members": [
      {
        "name": "Dallas Cowboys",
        "url": "https://www.dallascowboys.com"
      },
      {
        "name": "New England Patriots",
        "url": "https://www.patriots.com"
      }
    ],
    "event": {
      "@type": "SportsEvent",
      "name": "Super Bowl LVIII",
      "startDate": "2024-02-11",
      "location": {
        "@type": "Place",
        "name": "State Farm Stadium",
        "address": "Glendale, Arizona"
      }
    },
    "sameAs": [
      "https://www.facebook.com/NFL",
      "https://www.instagram.com/nfl",
      "https://www.twitter.com/nfl"
    ]
  }
}
