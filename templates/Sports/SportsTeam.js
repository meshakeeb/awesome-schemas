export default {
  "title": "Sports Team",
  "description": "Schema representing a sports team, detailing the team's name, sport, league, roster, and associated events. It can also include achievements, social media profiles, and other relevant team information.",
  "category": ["sports"],
  "keywords": ["sports", "sports team", "athletic team", "league team", "professional sports team", "team roster", "sports achievements", "team events"],
  "example": {
    "name": "Dallas Cowboys",
    "url": "https://www.dallascowboys.com",
    "description": "The Dallas Cowboys are a professional American football team based in Arlington, Texas. They play in the National Football League (NFL) and have won five Super Bowls.",
    "sport": "American Football",
    "league": "National Football League",
    "teamMember": [
      {
        "name": "Dak Prescott",
        "role": "Quarterback",
        "url": "https://www.dallascowboys.com/team/players-roster/dak-prescott"
      },
      {
        "name": "Micah Parsons",
        "role": "Linebacker",
        "url": "https://www.dallascowboys.com/team/players-roster/micah-parsons"
      }
    ],
    "event": {
      "@type": "SportsEvent",
      "name": "2024 NFC Championship",
      "startDate": "2024-01-28",
      "location": {
        "@type": "Place",
        "name": "Levi's Stadium",
        "address": "Santa Clara, California"
      }
    },
    "achievements": [
      "5 Super Bowl Championships",
      "8 NFC Championships"
    ],
    "sameAs": [
      "https://www.facebook.com/DallasCowboys",
      "https://www.instagram.com/dallascowboys",
      "https://www.twitter.com/dallascowboys"
    ]
  }
}
