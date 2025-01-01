export default {
  "title": "Sports Season",
  "description": "Schema representing a sports season, detailing the season’s name, start and end dates, associated teams, and key events. It covers a specific timeframe in the sport's annual cycle.",
  "category": ["sports"],
  "keywords": ["sports", "sports season", "sports league", "season schedule", "team season", "season games", "sports event", "competition"],
  "example": {
    "name": "2024 NFL Season",
    "url": "https://www.nfl.com/season/2024",
    "description": "The 2024 NFL season is the 104th season of the National Football League (NFL). It includes regular season games, playoff games, and culminates in the Super Bowl.",
    "startDate": "2024-09-05",
    "endDate": "2025-02-11",
    "sport": "American Football",
    "league": "National Football League",
    "seasonType": "Regular Season",
    "teams": [
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
      "startDate": "2025-02-11",
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
