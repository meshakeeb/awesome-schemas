export default {
  "title": "Drug",
  "description": "Schema representing a drug, including its name, classification, uses, side effects, dosage instructions, and contraindications. This schema provides information about the drug's properties and its impact on health.",
  "category": ["health-and-medical"],
  "keywords": ["health", "medical", "drug", "medicine", "medication", "pharmaceutical", "prescription", "treatment", "side effects", "dosage"],
  "example": {
    "name": "Ibuprofen",
    "alternateName": "Advil, Motrin",
    "description": "A nonsteroidal anti-inflammatory drug (NSAID) used to reduce fever, pain, and inflammation.",
    "drugClass": "NSAID (Nonsteroidal Anti-Inflammatory Drug)",
    "uses": [
      "Pain relief (mild to moderate pain)",
      "Anti-inflammatory treatment",
      "Fever reduction"
    ],
    "sideEffects": [
      "Stomach upset",
      "Heartburn",
      "Dizziness",
      "Rash",
      "Increased risk of heart attack or stroke (with prolonged use)"
    ],
    "contraindications": [
      "Allergy to NSAIDs",
      "Active peptic ulcer",
      "Severe heart failure",
      "Renal impairment"
    ],
    "dosage": {
      "adults": "200-400 mg every 4-6 hours, as needed. Do not exceed 1200 mg per day.",
      "children": "Dosage depends on weight and age. Consult a doctor for proper dosage."
    },
    "administration": "Oral (tablet, capsule, liquid)",
    "precautions": [
      "Take with food or milk to reduce stomach irritation.",
      "Avoid alcohol while taking this medication to reduce the risk of stomach bleeding."
    ],
    "interactions": [
      "Aspirin",
      "Blood thinners (e.g., warfarin)",
      "Diuretics"
    ],
    "overdoseSymptoms": [
      "Nausea",
      "Vomiting",
      "Stomach pain",
      "Confusion",
      "Drowsiness"
    ],
    "availableForms": [
      "Tablet",
      "Liquid",
      "Gel cap"
    ],
    "prescriptionRequired": false,
    "relatedDrugs": [
      {
        "drugName": "Aspirin",
        "url": "https://www.drugs.com/aspirin.html"
      },
      {
        "drugName": "Naproxen",
        "url": "https://www.drugs.com/naproxen.html"
      }
    ],
    "officialResources": [
      {
        "name": "FDA - Ibuprofen",
        "url": "https://www.fda.gov/ibuprofen"
      },
      {
        "name": "Mayo Clinic - Ibuprofen",
        "url": "https://www.mayoclinic.org/ibuprofen"
      }
    ]
  }
}
