export default {
  "title": "NGO",
  "description": "Schema representing a non-governmental organization (NGO), which is an organization that operates independently of government control and typically focuses on humanitarian, environmental, or social causes. It includes details such as the organization's name, address, contact information, and mission.",
  "category": ["organizations"],
  "keywords": ["organization", "NGO", "non-governmental organization", "non-profit", "charity", "social cause", "humanitarian", "global aid"],
  "example": {
    "@type": "NGO",
    "name": "Save the Earth Foundation",
    "legalName": "Save the Earth Foundation International",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "456 Green Lane",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "telephone": "+1-212-555-6789",
    "email": "contact@saveearth.org",
    "sameAs": "https://www.saveearth.org",
    "url": "https://www.saveearth.org",
    "logo": "https://www.saveearth.org/logo.png",
    "mission": "Our mission is to protect the environment through sustainable practices, community education, and global initiatives.",
    "founder": {
      "@type": "Person",
      "name": "John Doe",
      "jobTitle": "Founder & Executive Director"
    },
    "employee": {
      "@type": "Person",
      "name": "Jane Smith",
      "jobTitle": "Program Manager"
    },
    "donateAction": {
      "@type": "DonateAction",
      "name": "Donate to Save the Earth",
      "url": "https://www.saveearth.org/donate"
    },
    "member": {
      "@type": "Organization",
      "name": "Environmental Network"
    }
  }
}
