export default {
  "title": "Place Of Worship",
  "description": "Schema representing a place of worship, such as a church, mosque, temple, or synagogue. It includes details about the religious service, the place's name, address, and other related information.",
  "category": ["social-and-cultural"],
  "keywords": ["social", "cultural", "place of worship", "church", "mosque", "synagogue", "temple", "religion", "spiritual gathering", "worship service"],
  "example": {
    "name": "St. Peter's Basilica",
    "url": "https://www.vatican.va/various/basiliche/san_pietro/index_it.htm",
    "description": "St. Peter's Basilica is an Italian Renaissance church in Vatican City, the center of Christianity, and one of the largest churches in the world.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Piazza San Pietro",
      "addressLocality": "Vatican City",
      "addressCountry": "IT"
    },
    "religiousAffiliation": {
      "@type": "Religion",
      "name": "Christianity"
    },
    "service": {
      "@type": "Event",
      "name": "Sunday Mass",
      "startDate": "2024-01-07T10:00:00Z",
      "location": {
        "@type": "Place",
        "name": "St. Peter's Basilica"
      }
    },
    "sameAs": [
      "https://www.facebook.com/vatican.va",
      "https://www.instagram.com/vatican"
    ]
  }
}
