export default {
  "title": "Government Organization",
  "description": "Schema representing a government organization, which is an entity that carries out governmental functions, typically at a national, regional, or local level. It includes details such as the name of the organization, its services, and contact information.",
  "category": ["organizations"],
  "keywords": ["organization", "government organization", "public service", "government agency", "public sector", "governmental body"],
  "example": {
    "@type": "GovernmentOrganization",
    "name": "U.S. Department of State",
    "legalName": "Department of State",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2201 C Street NW",
      "addressLocality": "Washington",
      "addressRegion": "DC",
      "postalCode": "20520",
      "addressCountry": "US"
    },
    "telephone": "+1-202-647-4000",
    "email": "contactus@state.gov",
    "sameAs": "https://www.state.gov",
    "department": {
      "@type": "Organization",
      "name": "Bureau of Consular Affairs"
    },
    "url": "https://www.state.gov",
    "identifier": {
      "@type": "PropertyValue",
      "name": "GovID",
      "value": "USG-123456"
    },
    "employee": {
      "@type": "Person",
      "name": "Secretary of State"
    }
  }
}
