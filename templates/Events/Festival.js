export default {
  "title": "Festival",
  "description": "Schema representing a festival event, including details such as the festival name, location, date, performers, and activities.",
  "category": ["events"],
  "keywords": ["events", "festival", "celebration", "concert", "cultural event", "performances", "food", "art"],
  "example": {
    "eventName": "Coachella Valley Music and Arts Festival 2024",
    "organizer": "Goldenvoice",
    "location": "Empire Polo Club, Indio, California",
    "startDate": "2024-04-12T12:00:00Z",
    "endDate": "2024-04-14T23:59:00Z",
    "eventType": "Music and Arts Festival",
    "description": "One of the largest and most well-known music festivals in the world, featuring live performances from top musical artists, art installations, and diverse cultural activities.",
    "keywords": ["music festival", "arts festival", "live performance", "cultural celebration", "Coachella", "concerts"],
    "performers": [
      {
        "name": "Beyoncé",
        "role": "Headliner"
      },
      {
        "name": "Bad Bunny",
        "role": "Special Guest"
      },
      {
        "name": "Blackpink",
        "role": "Main Act"
      }
    ],
    "schedule": [
      {
        "time": "18:00",
        "performer": "Beyoncé",
        "performanceType": "Headliner"
      },
      {
        "time": "20:00",
        "performer": "Bad Bunny",
        "performanceType": "Main Act"
      },
      {
        "time": "22:00",
        "performer": "Blackpink",
        "performanceType": "Special Guest"
      }
    ],
    "activities": [
      {
        "type": "Food",
        "description": "Gourmet food stalls offering a wide variety of cuisines."
      },
      {
        "type": "Art",
        "description": "Outdoor art installations and exhibitions from international artists."
      },
      {
        "type": "Workshops",
        "description": "Interactive workshops focused on music, dance, and creative expression."
      }
    ],
    "relatedEvents": [
      {
        "eventName": "Glastonbury Festival 2024",
        "url": "https://www.glastonburyfestivals.co.uk"
      },
      {
        "eventName": "Lollapalooza 2024",
        "url": "https://www.lollapalooza.com"
      }
    ],
    "officialWebsite": "https://www.coachella.com"
  }
}
