export default {
  "title": "Club",
  "description": "Schema representing a club, typically related to sports, social organizations, or other recreational groups. It includes details like the club's name, description, location, and social media links.",
  "category": ["social-and-cultural"],
  "keywords": ["social", "cultural", "club", "social club", "sports club", "membership", "recreational club", "organization", "club events"],
  "example": {
    "name": "Manchester United Football Club",
    "url": "https://www.manutd.com",
    "description": "Manchester United Football Club is a professional football club based in Manchester, England. Founded in 1878, it is one of the most successful football clubs in the world.",
    "sport": "Football",
    "membership": {
      "type": "MembershipCard",
      "membershipNumber": "MUFC12345",
      "membershipLevel": "Premium"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Old Trafford",
      "addressLocality": "Manchester",
      "addressRegion": "Greater Manchester",
      "postalCode": "M16 0RA",
      "addressCountry": "GB"
    },
    "clubEvent": {
      "@type": "SportsEvent",
      "name": "Manchester United vs Liverpool",
      "startDate": "2024-12-15",
      "location": {
        "@type": "Place",
        "name": "Old Trafford",
        "address": "Manchester, Greater Manchester"
      }
    },
    "sameAs": [
      "https://www.facebook.com/manchesterunited",
      "https://www.instagram.com/manchesterunited",
      "https://www.twitter.com/manutd"
    ]
  }
}
