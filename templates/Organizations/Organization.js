export default {
  "title": "Organization",
  "description": "Schema representing an organization, which can be any entity, whether a business, non-profit, educational institution, or other types of groups that have a structured form. It includes information such as name, address, contact details, and other relevant data.",
  "category": ["organizations"],
  "keywords": ["organization", "company", "non-profit", "institution", "association", "corporation", "group"],
  "example": {
    "@type": "Organization",
    "name": "Tech Innovators Inc.",
    "legalName": "Tech Innovators Incorporated",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "789 Innovation Avenue",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    },
    "telephone": "+1-415-555-1234",
    "email": "contact@techinnovators.com",
    "sameAs": "https://www.techinnovators.com",
    "url": "https://www.techinnovators.com",
    "logo": "https://www.techinnovators.com/logo.png",
    "founder": {
      "@type": "Person",
      "name": "Alice Johnson",
      "jobTitle": "Founder & CEO"
    },
    "employee": {
      "@type": "Person",
      "name": "Bob Williams",
      "jobTitle": "Chief Technology Officer"
    },
    "department": {
      "@type": "Organization",
      "name": "Research and Development"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "Tech Innovators Network"
    }
  }
}
