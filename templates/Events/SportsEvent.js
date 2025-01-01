export default {
  "title": "Sports Event",
  "description": "Schema representing a sports event, including details such as the event name, location, date, teams or participants, and any associated outcomes or results.",
  "category": ["events"],
  "keywords": ["events", "sports event", "competition", "match", "tournament", "team", "athletes"],
  "example": {
    "eventName": "Summer Olympic Games 2024",
    "organizer": "International Olympic Committee",
    "location": "Paris, France",
    "startDate": "2024-07-26T08:00:00Z",
    "endDate": "2024-08-11T20:00:00Z",
    "eventType": "Multi-sport event",
    "description": "The 2024 Summer Olympic Games, bringing together the world's best athletes to compete in various sports over a two-week period.",
    "keywords": ["Olympics", "sports", "competition", "athletes", "multi-sport event"],
    "participants": [
      {
        "team": "USA",
        "athletes": ["Michael Phelps", "Simone Biles"]
      },
      {
        "team": "China",
        "athletes": ["Sun Yang", "Liu Xiang"]
      }
    ],
    "outcome": "Results of the event will be determined after the closing ceremony, with medals awarded to the top performers in each sport.",
    "relatedEvents": [
      {
        "eventName": "Tokyo 2020 Olympics",
        "url": "https://olympics.com/tokyo-2020"
      },
      {
        "eventName": "Winter Olympic Games 2026",
        "url": "https://olympics.com/2026"
      }
    ],
    "officialWebsite": "https://www.olympic.org/paris-2024"
  }
}
