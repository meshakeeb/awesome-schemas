export default {
  "title": "Event",
  "description": "Schema representing an event, including details such as the event name, location, start and end dates, and the performers or organizers involved.",
  "keywords": ["events", "event", "live event", "concert", "conference", "gathering", "performance"],
  "example": {
    "eventName": "Tech Innovation Conference 2024",
    "organizer": "Tech Innovators Group",
    "location": "San Francisco, CA",
    "startDate": "2024-05-15T09:00:00Z",
    "endDate": "2024-05-17T18:00:00Z",
    "eventType": "Conference",
    "description": "A three-day conference focusing on the latest advancements in technology, featuring keynote speakers, panels, and hands-on workshops.",
    "keywords": ["conference", "technology", "innovation", "networking", "workshops"],
    "performers": [
      {
        "name": "John Doe",
        "role": "Keynote Speaker"
      },
      {
        "name": "Jane Smith",
        "role": "Panel Moderator"
      }
    ],
    "relatedEvents": [
      {
        "eventName": "AI Summit 2024",
        "url": "https://example.com/ai-summit"
      },
      {
        "eventName": "Tech Talks 2024",
        "url": "https://example.com/tech-talks"
      }
    ],
    "officialWebsite": "https://www.techinnovatorsgroup.com"
  }
}
