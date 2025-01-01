export default {
  "title": "Scientific Event",
  "description": "Schema representing a scientific event, which includes details about the event’s title, organizer, location, date, and topics covered.",
  "category": ["science-and-nature"],
  "keywords": ["science", "nature", "scientific event", "conference", "symposium", "workshop", "research", "academic event", "scientific conference", "scientific seminar"],
  "example": {
    "name": "International Symposium on Artificial Intelligence",
    "organizer": {
      "@type": "Organization",
      "name": "Global AI Research Institute",
      "url": "https://www.globalai.org"
    },
    "startDate": "2025-06-15",
    "endDate": "2025-06-17",
    "location": {
      "@type": "Place",
      "name": "New York Convention Center",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Conference Blvd.",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10001",
        "addressCountry": "US"
      }
    },
    "description": "This international symposium will bring together leading experts in artificial intelligence to discuss cutting-edge advancements in the field, including AI ethics, machine learning algorithms, and autonomous systems.",
    "eventType": "Conference",
    "mainEntityOfPage": "https://www.globalai.org/symposium-2025",
    "sameAs": [
      "https://www.linkedin.com/company/global-ai-research-institute",
      "https://twitter.com/globalAIresearch"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Researchers, Academics, Professionals in AI"
    }
  }
}
