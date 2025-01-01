export default {
  "title": "Government Service",
  "description": "Schema representing a service provided by a government entity, including details like the service name, description, eligibility, and contact information.",
  "category": ["government-and-civic"],
  "keywords": ["government", "civic", "government service", "public service", "citizen services", "civic services", "government support", "service access"],
  "example": {
    "serviceName": "Driver’s License Renewal",
    "organization": "Department of Motor Vehicles (DMV)",
    "serviceType": "Renewal",
    "description": "A service that allows eligible individuals to renew their driver’s license either online or in person at DMV locations.",
    "eligibility": [
      "Must be a U.S. citizen or legal resident",
      "Must have a valid, expired, or soon-to-expire driver’s license"
    ],
    "requiredDocuments": [
      "Current driver’s license",
      "Proof of address (e.g., utility bill, lease agreement)"
    ],
    "serviceHours": {
      "monday": "9:00 AM - 5:00 PM",
      "tuesday": "9:00 AM - 5:00 PM",
      "wednesday": "9:00 AM - 5:00 PM",
      "thursday": "9:00 AM - 5:00 PM",
      "friday": "9:00 AM - 5:00 PM",
      "saturday": "Closed",
      "sunday": "Closed"
    },
    "contact": {
      "phone": "+1 555-123-4567",
      "email": "contact@dmv.gov",
      "website": "https://www.dmv.gov"
    },
    "fees": [
      {
        "type": "Online Renewal",
        "amount": "$25"
      },
      {
        "type": "In-Person Renewal",
        "amount": "$30"
      }
    ],
    "location": {
      "address": "123 Government Blvd, City, State, ZIP",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "relatedServices": [
      {
        "serviceName": "Vehicle Registration",
        "url": "https://www.dmv.gov/vehicle-registration"
      },
      {
        "serviceName": "ID Card Application",
        "url": "https://www.dmv.gov/id-card-application"
      }
    ],
    "officialWebsite": "https://www.dmv.gov"
  }
}
