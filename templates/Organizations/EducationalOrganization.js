export default {
  "title": "Educational Organization",
  "description": "Schema representing an educational organization, such as a school, university, or college, that provides learning and educational services. This includes information about the institution's name, location, programs, and courses offered.",
  "keywords": ["organizations", "educational organization", "school", "university", "college", "learning institution", "education"],
  "example": {
    "@type": "EducationalOrganization",
    "name": "Yeditepe University",
    "legalName": "Yeditepe University Corporation",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "26, Kayışdağı Street",
      "addressLocality": "Istanbul",
      "addressRegion": "Istanbul Province",
      "postalCode": "34755",
      "addressCountry": "Turkey"
    },
    "telephone": "+90-216-123-4567",
    "email": "info@yeditepe.edu.tr",
    "sameAs": "https://www.yeditepe.edu.tr",
    "department": {
      "@type": "Organization",
      "name": "Department of Computer Science"
    },
    "founder": {
      "@type": "Person",
      "name": "Dr. Ali Yıldız"
    },
    "url": "https://www.yeditepe.edu.tr",
    "educationalCredentialAwarded": "Bachelor's Degree",
    "program": {
      "@type": "Course",
      "courseMode": "Full-time",
      "courseMode": "Online"
    }
  }
}
