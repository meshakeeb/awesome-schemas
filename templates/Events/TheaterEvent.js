export default {
  "title": "Theater Event",
  "description": "Schema representing a theater event, including details such as the event name, location, date, performers, and any associated plays or performances.",
  "category": ["events"],
  "keywords": ["events", "theater event", "play", "performance", "stage", "drama", "actors"],
  "example": {
    "eventName": "Shakespeare in the Park - Hamlet",
    "organizer": "The Public Theater",
    "location": "Delacorte Theater, New York",
    "startDate": "2024-07-01T20:00:00Z",
    "endDate": "2024-07-30T22:00:00Z",
    "eventType": "Play",
    "description": "A month-long outdoor performance of Shakespeare's Hamlet, featuring a contemporary reinterpretation of the classic tragedy.",
    "keywords": ["Shakespeare", "Hamlet", "play", "theater", "performance", "drama"],
    "performers": [
      {
        "name": "John Smith",
        "role": "Hamlet"
      },
      {
        "name": "Emily Johnson",
        "role": "Ophelia"
      },
      {
        "name": "Robert Brown",
        "role": "Claudius"
      }
    ],
    "schedule": [
      {
        "date": "2024-07-01",
        "time": "20:00",
        "performer": "John Smith",
        "performanceType": "Lead Role"
      },
      {
        "date": "2024-07-02",
        "time": "20:00",
        "performer": "Emily Johnson",
        "performanceType": "Supporting Role"
      },
      {
        "date": "2024-07-03",
        "time": "20:00",
        "performer": "Robert Brown",
        "performanceType": "Supporting Role"
      }
    ],
    "relatedEvents": [
      {
        "eventName": "The Tempest",
        "url": "https://www.publictheater.org/tempest"
      },
      {
        "eventName": "A Midsummer Night's Dream",
        "url": "https://www.publictheater.org/midsummer"
      }
    ],
    "officialWebsite": "https://www.publictheater.org/shakespeare-in-the-park"
  }
}
