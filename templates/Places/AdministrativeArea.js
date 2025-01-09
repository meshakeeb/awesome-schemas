export default {
  "title": "Administrative Area",
  "description": "Schema representing an administrative region or area that is typically part of a larger geographical or political division. It includes details such as the name, type, and boundary information.",
  "keywords": ["places", "administrative area", "region", "division", "territory", "government area", "boundary"],
  "example": {
    "@type": "AdministrativeArea",
    "name": "California",
    "description": "A state located on the west coast of the United States. Known for its diverse geography, culture, and economy.",
    "identifier": "CA",
    "areaServed": {
      "@type": "Place",
      "name": "United States"
    },
    "geo": {
      "@type": "GeoShape",
      "box": "32.5 -124.5 42 114.5"
    },
    "type": "State",
    "country": {
      "@type": "Country",
      "name": "United States"
    },
    "url": "https://www.ca.gov"
  }
}
