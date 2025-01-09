export default {
  "title": "School",
  "description": "Schema representing an educational institution that provides learning environments and resources for the education of students. It typically offers primary, secondary, or higher education and may have various facilities and academic programs.",
  "keywords": ["places", "school", "education", "academic institution", "primary school", "secondary school", "high school", "learning", "curriculum", "faculty", "student body"],
  "example": {
    "@type": "School",
    "name": "Greenfield Academy",
    "description": "A comprehensive educational institution offering a wide range of academic programs, extracurricular activities, and a strong commitment to student development.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Learning Lane",
      "addressLocality": "Greenfield",
      "addressRegion": "CA",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.0700",
      "longitude": "-118.2500"
    },
    "telephone": "+1 555-555-1234",
    "url": "https://www.greenfieldacademy.edu",
    "image": "https://www.example.com/images/greenfield_academy.jpg",
    "schoolType": "Primary, Secondary",
    "academicCredential": "High School Diploma",
    "department": [
      {
        "@type": "Organization",
        "name": "Science Department"
      },
      {
        "@type": "Organization",
        "name": "Mathematics Department"
      }
    ]
  }
}
