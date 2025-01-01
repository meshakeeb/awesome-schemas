export default {
  "title": "Person",
  "description": "Schema representing an individual person, including personal details such as name, address, and other biographical information.",
  "category": ["people"],
  "keywords": ["people", "person", "individual", "name", "biography", "human", "details"],
  "example": {
    "@type": "Person",
    "name": "John Doe",
    "jobTitle": "Software Engineer",
    "telephone": "+1-800-555-0199",
    "email": "john.doe@example.com",
    "birthDate": "1990-05-15",
    "gender": "Male",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Springfield",
      "addressRegion": "IL",
      "postalCode": "62701",
      "addressCountry": "US"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Springfield"
    },
    "knows": [
      {
        "@type": "Person",
        "name": "Jane Smith",
        "jobTitle": "Product Manager"
      }
    ],
    "image": "https://www.example.com/images/john_doe.jpg",
    "url": "https://www.johndoeportfolio.com"
  }
}
