export default {
  "title": "Disease",
  "description": "Schema representing a disease, including its name, symptoms, transmission methods, and treatment options. This schema also includes related data such as prevention and risk factors.",
  "keywords": ["health-and-medical", "health", "medical", "disease", "illness", "health condition", "infection", "treatment", "symptoms"],
  "example": {
    "name": "Influenza",
    "alternateName": "Flu",
    "description": "A contagious respiratory illness caused by influenza viruses that affects the nose, throat, and sometimes the lungs.",
    "symptoms": [
      "Fever",
      "Cough",
      "Sore throat",
      "Runny or stuffy nose",
      "Muscle or body aches",
      "Fatigue"
    ],
    "transmission": "Influenza spreads mainly through droplets when an infected person coughs, sneezes, or talks. It can also spread by touching surfaces contaminated with the virus and then touching the face.",
    "treatment": [
      "Antiviral medications (e.g., oseltamivir)",
      "Rest",
      "Fluids",
      "Pain relievers"
    ],
    "prevention": [
      "Annual flu vaccination",
      "Frequent hand washing",
      "Covering mouth and nose when coughing or sneezing"
    ],
    "riskFactors": [
      "Young children",
      "Elderly adults",
      "Pregnant women",
      "People with weakened immune systems"
    ],
    "complications": [
      "Pneumonia",
      "Bronchitis",
      "Sinus infections",
      "Ear infections"
    ],
    "incubationPeriod": "1 to 4 days",
    "duration": "Typically 1 to 2 weeks",
    "relatedConditions": [
      {
        "conditionName": "Pneumonia",
        "url": "https://www.cdc.gov/pneumonia"
      },
      {
        "conditionName": "Common Cold",
        "url": "https://www.cdc.gov/common-cold"
      }
    ],
    "officialResources": [
      {
        "name": "CDC - Influenza",
        "url": "https://www.cdc.gov/flu"
      },
      {
        "name": "World Health Organization (WHO) - Influenza",
        "url": "https://www.who.int/influenza"
      }
    ]
  }
}
