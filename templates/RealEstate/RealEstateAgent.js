export default {
  "title": "Real Estate Agent",
  "description": "A real estate agent is an individual or organization that helps clients buy, sell, or rent properties. They facilitate transactions by offering services such as property listing, marketing, and negotiation.",
  "category": ["real-estate"],
  "keywords": ["real estate", "real estate agent", "property agent", "real estate services", "property listing", "home buying", "real estate broker", "real estate consulting"],
  "example": {
    "@type": "RealEstateAgent",
    "name": "John Doe Realty",
    "description": "John Doe Realty is a professional real estate agency with expertise in residential properties, offering personalized services for both buyers and sellers in the Sunnydale area.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "456 Main St.",
      "addressLocality": "Sunnydale",
      "addressRegion": "CA",
      "postalCode": "90210",
      "addressCountry": "USA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-789-1234",
      "contactType": "Customer Service",
      "areaServed": "Sunnydale",
      "availableLanguage": "English"
    },
    "url": "https://www.johndoerealty.com",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "Varies",
      "url": "https://www.johndoerealty.com/properties"
    },
    "agent": {
      "@type": "Person",
      "name": "John Doe",
      "jobTitle": "Real Estate Agent",
      "telephone": "+1-555-123-4567",
      "email": "johndoe@johndoerealty.com",
      "url": "https://www.johndoerealty.com/john-doe"
    }
  }
}
