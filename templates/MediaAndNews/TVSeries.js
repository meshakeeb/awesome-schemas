export default {
  "title": "TV Series",
  "description": "Schema representing a TV series, including details such as title, director, actors, and episodes.",
  "category": ["media-and-news"],
  "keywords": ["media", "news", "TV series", "television show", "episodes", "drama", "comedy", "entertainment", "film"],
  "example": {
    "name": "The Global Chronicles",
    "url": "https://www.example.com/tv-series/the-global-chronicles",
    "image": "https://www.example.com/tv-series-image.jpg",
    "description": "A thrilling drama series following the lives of global leaders navigating political intrigue, personal conflicts, and international crises.",
    "director": {
      "name": "John Davis",
      "url": "https://www.example.com/director/john-davis",
      "image": "https://www.example.com/director/john-davis.jpg"
    },
    "actor": [
      {
        "name": "Alice Johnson",
        "url": "https://www.example.com/actor/alice-johnson",
        "image": "https://www.example.com/actor/alice-johnson.jpg"
      },
      {
        "name": "Robert Williams",
        "url": "https://www.example.com/actor/robert-williams",
        "image": "https://www.example.com/actor/robert-williams.jpg"
      }
    ],
    "numberOfSeasons": 5,
    "numberOfEpisodes": 50,
    "genre": ["Drama", "Thriller", "Action"],
    "mainEntityOfPage": "https://www.example.com/tv-series/the-global-chronicles",
    "datePublished": "2023-01-15",
    "dateModified": "2024-01-01",
    "sameAs": [
      "https://www.facebook.com/TheGlobalChronicles",
      "https://www.twitter.com/TheGlobalChronicles"
    ],
    "season": [
      {
        "seasonNumber": 1,
        "episode": [
          {
            "episodeNumber": 1,
            "name": "The Beginning",
            "url": "https://www.example.com/tv-series/the-global-chronicles/season-1/episode-1",
            "datePublished": "2023-01-15",
            "duration": "45 minutes",
            "description": "The first episode introduces the main characters and sets the stage for the global political drama."
          },
          {
            "episodeNumber": 2,
            "name": "The Betrayal",
            "url": "https://www.example.com/tv-series/the-global-chronicles/season-1/episode-2",
            "datePublished": "2023-01-22",
            "duration": "47 minutes",
            "description": "A shocking betrayal threatens to upend the delicate balance of power among the global leaders."
          }
        ]
      }
    ]
  }
}
