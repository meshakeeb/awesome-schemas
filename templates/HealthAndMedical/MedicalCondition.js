export default {
  "title": "Medical Condition",
  "description": "Schema representing a medical condition, including its name, symptoms, causes, treatment options, and prevention methods. This schema also provides related conditions and resources.",
  "category": ["health-and-medical"],
  "keywords": ["health", "medical", "medical condition", "health condition", "illness", "disease", "symptoms", "treatment", "prevention"],
  "example": {
    "name": "Diabetes Mellitus",
    "alternateName": "Diabetes",
    "description": "A group of diseases that result in high blood sugar (too much glucose in the blood). The most common forms are Type 1, Type 2, and gestational diabetes.",
    "symptoms": [
      "Increased thirst",
      "Frequent urination",
      "Extreme hunger",
      "Unexplained weight loss",
      "Fatigue",
      "Blurred vision",
      "Slow healing sores"
    ],
    "causes": [
      "Genetic factors",
      "Lifestyle factors (e.g., poor diet, lack of physical activity)",
      "Obesity",
      "Hormonal changes (gestational diabetes)"
    ],
    "treatment": [
      "Insulin therapy (for Type 1)",
      "Oral medications (for Type 2)",
      "Lifestyle changes (diet and exercise)",
      "Blood sugar monitoring"
    ],
    "prevention": [
      "Healthy diet (low in sugar and processed foods)",
      "Regular physical activity",
      "Maintaining a healthy weight",
      "Routine blood sugar screening"
    ],
    "complications": [
      "Heart disease",
      "Stroke",
      "Kidney disease",
      "Nerve damage",
      "Eye damage (retinopathy)"
    ],
    "riskFactors": [
      "Family history",
      "Overweight or obese",
      "Sedentary lifestyle",
      "Age (over 45 years)"
    ],
    "relatedConditions": [
      {
        "conditionName": "Hypertension",
        "url": "https://www.cdc.gov/hypertension"
      },
      {
        "conditionName": "Cholesterol Disorders",
        "url": "https://www.cdc.gov/cholesterol"
      }
    ],
    "officialResources": [
      {
        "name": "American Diabetes Association",
        "url": "https://www.diabetes.org"
      },
      {
        "name": "World Health Organization - Diabetes",
        "url": "https://www.who.int/diabetes"
      }
    ]
  }
}
