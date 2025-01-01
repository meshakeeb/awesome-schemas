export default {
  "title": "Publication Event",
  "description": "Schema representing a publication event, such as a book release or launch event, including details such as the publication name, location, date, and related media.",
  "category": ["events"],
  "keywords": ["events", "publication event", "book launch", "book release", "author signing", "literary event", "press conference"],
  "example": {
    "eventName": "Book Launch: The Future of Technology",
    "organizer": "Tech Publishing House",
    "location": "City Library, New York, USA",
    "startDate": "2024-04-10T18:00:00Z",
    "endDate": "2024-04-10T21:00:00Z",
    "eventType": "Book Launch",
    "description": "A special event to celebrate the launch of 'The Future of Technology,' featuring a live reading by the author, panel discussions, and a Q&A session.",
    "keywords": ["book launch", "author signing", "future technology", "literary event", "tech book release", "new release"],
    "authors": [
      {
        "name": "Dr. John Doe",
        "role": "Author",
        "bookTitle": "The Future of Technology"
      }
    ],
    "schedule": [
      {
        "date": "2024-04-10",
        "time": "18:00",
        "event": "Welcome Speech & Introduction",
        "description": "Introduction of the event and speakers by the event host."
      },
      {
        "date": "2024-04-10",
        "time": "19:00",
        "event": "Live Reading by Dr. John Doe",
        "description": "Dr. John Doe reads excerpts from his new book 'The Future of Technology.'"
      },
      {
        "date": "2024-04-10",
        "time": "20:00",
        "event": "Panel Discussion: The Future of Technology",
        "description": "A discussion with experts about the key themes and predictions in 'The Future of Technology.'"
      }
    ],
    "relatedEvents": [
      {
        "eventName": "Tech Publishing Summit 2024",
        "url": "https://www.techpublishingsummit.com"
      },
      {
        "eventName": "Innovation in Publishing Conference 2024",
        "url": "https://www.innovationinpublishing.com"
      }
    ],
    "officialWebsite": "https://www.thefutureoftechnologybooklaunch.com"
  }
}
