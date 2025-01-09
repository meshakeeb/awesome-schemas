export default {
  "title": "Hospital",
  "description": "Schema representing a hospital, including its name, type, services offered, location, and contact information. It includes details about the hospital's specialties, facilities, and accreditation.",
  "keywords": ["health-and-medical", "health", "medical", "hospital", "healthcare", "medical services", "facility", "accreditation", "healthcare provider"],
  "example": {
    "name": "St. John's Hospital",
    "description": "A general hospital offering emergency, surgical, pediatric, and maternity care. It provides comprehensive healthcare services to the local community.",
    "hospitalType": "General Hospital",
    "services": [
      "Emergency Care",
      "Surgical Services",
      "Pediatric Care",
      "Maternity and Obstetrics",
      "Radiology and Imaging",
      "Laboratory Services"
    ],
    "specialties": [
      "Cardiology",
      "Orthopedics",
      "Neurology",
      "Gastroenterology",
      "Oncology"
    ],
    "location": {
      "address": "123 Main Street, Springfield, IL, 62701, USA",
      "latitude": 39.7817,
      "longitude": -89.6501
    },
    "contact": {
      "phone": "+1 (555) 123-4567",
      "email": "contact@stjohnshospital.com",
      "website": "https://www.stjohnshospital.com"
    },
    "accreditation": [
      "Joint Commission",
      "National Health Service Accreditation"
    ],
    "capacity": 500,
    "emergencyServices": true,
    "numberOfBeds": 350,
    "foundingDate": "1985-03-15",
    "languagesSpoken": [
      "English",
      "Spanish",
      "French"
    ],
    "patientRating": {
      "overallRating": 4.5,
      "ratingCount": 1200
    },
    "relatedHospitals": [
      {
        "hospitalName": "Springfield Medical Center",
        "url": "https://www.springfieldmedcenter.com"
      },
      {
        "hospitalName": "Green Valley Hospital",
        "url": "https://www.greenvalleyhospital.com"
      }
    ]
  }
}
