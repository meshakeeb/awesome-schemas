export default {
  "title": "Political Event",
  "description": "Schema representing a political event, such as elections, rallies, debates, or political speeches. It includes details like the event name, date, location, participants, and topics covered.",
  "category": ["government-and-civic", "events"],
  "keywords": ["government", "civic", "political event", "political rally", "election event", "political debate", "political speech", "campaign event"],
  "example": {
    "eventName": "Presidential Election Debate",
    "organizer": "National Election Commission",
    "location": "Washington D.C., USA",
    "startDate": "2024-10-10T18:00:00Z",
    "endDate": "2024-10-10T20:00:00Z",
    "eventType": "Debate",
    "description": "The first presidential debate of the 2024 election cycle, featuring candidates from multiple political parties discussing key issues facing the nation.",
    "participants": [
      {
        "name": "John Doe",
        "party": "Democratic Party",
        "role": "Candidate"
      },
      {
        "name": "Jane Smith",
        "party": "Republican Party",
        "role": "Candidate"
      }
    ],
    "topicsCovered": [
      "Healthcare reform",
      "Climate change",
      "National security",
      "Economic policies"
    ],
    "schedule": [
      {
        "date": "2024-10-10",
        "time": "18:00",
        "event": "Opening Remarks",
        "description": "Introduction of candidates and overview of the debate format."
      },
      {
        "date": "2024-10-10",
        "time": "18:30",
        "event": "Healthcare Debate",
        "description": "Candidates discuss their proposals for healthcare reform."
      },
      {
        "date": "2024-10-10",
        "time": "19:00",
        "event": "Economic Policies Debate",
        "description": "Candidates discuss their plans to address economic issues."
      }
    ],
    "relatedEvents": [
      {
        "eventName": "Vice Presidential Debate",
        "url": "https://www.2024elections.com/vice-presidential-debate"
      },
      {
        "eventName": "Political Rally for Change",
        "url": "https://www.2024elections.com/rally-for-change"
      }
    ],
    "officialWebsite": "https://www.2024elections.com/presidential-debate"
  }
}
