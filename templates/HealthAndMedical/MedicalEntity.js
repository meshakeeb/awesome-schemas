export default {
  "title": "Medical Entity",
  "description": "Schema representing a medical entity, which could include diseases, conditions, drugs, treatments, or any medical-related subject. This schema provides information about the entity’s characteristics, associated symptoms, causes, treatments, and related entities.",
  "category": ["health-and-medical"],
  "keywords": ["health", "medical", "medical entity", "healthcare", "disease", "treatment", "symptoms", "medical research", "health conditions"],
  "example": {
    "name": "Asthma",
    "alternateName": "Bronchial Asthma",
    "description": "A condition in which your airways narrow and swell and produce extra mucus, making it difficult to breathe. Asthma is chronic and can be triggered by allergens, exercise, or stress.",
    "medicalType": "Disease",
    "associatedSymptoms": [
      "Shortness of breath",
      "Wheezing",
      "Chest tightness",
      "Coughing"
    ],
    "causes": [
      "Genetic predisposition",
      "Environmental factors (e.g., allergens, air pollution)",
      "Respiratory infections in early childhood"
    ],
    "riskFactors": [
      "Family history of asthma",
      "Exposure to allergens",
      "Living in urban areas with air pollution",
      "Smoking or exposure to secondhand smoke"
    ],
    "treatment": [
      "Inhaled corticosteroids",
      "Bronchodilators",
      "Leukotriene modifiers",
      "Immunotherapy (for allergy-induced asthma)"
    ],
    "prevention": [
      "Avoidance of known allergens",
      "Regular use of prescribed inhalers",
      "Staying up to date on vaccinations (e.g., flu vaccine)"
    ],
    "relatedEntities": [
      {
        "entityName": "Allergic Rhinitis",
        "url": "https://www.cdc.gov/rhinitis"
      },
      {
        "entityName": "Chronic Obstructive Pulmonary Disease (COPD)",
        "url": "https://www.cdc.gov/copd"
      }
    ],
    "officialResources": [
      {
        "name": "American Lung Association - Asthma",
        "url": "https://www.lung.org/asthma"
      },
      {
        "name": "National Heart, Lung, and Blood Institute - Asthma",
        "url": "https://www.nhlbi.nih.gov/health-topics/asthma"
      }
    ],
    "diagnosticCriteria": [
      "Spirometry to measure lung function",
      "Peak flow meter for measuring airway obstruction",
      "Bronchoprovocation tests (if necessary)"
    ]
  }
}
