export default {
  "title": "Music Event",
  "description": "Schema representing a music event, including details such as the event name, location, performers, and schedule.",
  "keywords": ["events", "music event", "concert", "live performance", "festival", "musician", "band"],
  "example": {
    "eventName": "Rock Festival 2024",
    "organizer": "Live Nation",
    "location": "Madison Square Garden, New York",
    "startDate": "2024-06-15T18:00:00Z",
    "endDate": "2024-06-15T23:59:00Z",
    "eventType": "Music Festival",
    "description": "A one-day music festival featuring some of the biggest rock bands and musicians from around the world.",
    "keywords": ["rock music", "festival", "live performance", "concert", "music event"],
    "performers": [
      {
        "name": "The Rolling Stones",
        "role": "Headliner"
      },
      {
        "name": "Foo Fighters",
        "role": "Special Guest"
      },
      {
        "name": "Imagine Dragons",
        "role": "Opening Act"
      }
    ],
    "schedule": [
      {
        "time": "18:00",
        "performer": "Imagine Dragons",
        "performanceType": "Opening Act"
      },
      {
        "time": "20:00",
        "performer": "Foo Fighters",
        "performanceType": "Main Act"
      },
      {
        "time": "22:00",
        "performer": "The Rolling Stones",
        "performanceType": "Headliner"
      }
    ],
    "relatedEvents": [
      {
        "eventName": "Coachella 2024",
        "url": "https://www.coachella.com"
      },
      {
        "eventName": "Glastonbury Festival 2024",
        "url": "https://www.glastonburyfestivals.co.uk"
      }
    ],
    "officialWebsite": "https://www.livenation.com"
  }
}
