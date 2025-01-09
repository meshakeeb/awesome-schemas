export default {
  "title": "Contact Point",
  "description": "Schema representing a contact point for a person or organization, typically used for communication purposes. This can include phone numbers, email addresses, and other relevant contact methods.",
  "keywords": ["people", "contact", "phone", "email", "communication", "customer service", "support"],
  "example": {
    "@type": "ContactPoint",
    "telephone": "+1-800-555-0199",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": "English",
    "url": "https://www.example.com/contact",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "email": "support@example.com"
  }
}
