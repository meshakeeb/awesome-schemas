export default {
  "title": "Corporation",
  "description": "Schema representing a corporation, including details about its legal structure, type of business, and contact information. Corporations are large companies or entities organized under the law, typically with shareholders and a board of directors.",
  "category": ["organizations"],
  "keywords": ["organization", "corporation", "business", "company", "enterprise", "organization", "legal entity"],
  "example": {
    "@type": "Corporation",
    "name": "Tech Innovations Inc.",
    "legalName": "Tech Innovations Incorporated",
    "identifier": {
      "@type": "PropertyValue",
      "name": "IRS EIN",
      "value": "12-3456789"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Avenue",
      "addressLocality": "Silicon Valley",
      "addressRegion": "CA",
      "postalCode": "94043",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-1234",
      "contactType": "Customer Service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "founder": {
      "@type": "Person",
      "name": "John Doe"
    },
    "sameAs": "https://www.techinnovations.com",
    "employee": {
      "@type": "Organization",
      "name": "Tech Innovations Inc. Staff"
    },
    "url": "https://www.techinnovations.com",
    "taxID": "12-3456789"
  }
}
