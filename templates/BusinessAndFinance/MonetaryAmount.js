export default {
  "title": "Monetary Amount",
  "description": "Schema representing a monetary amount, including the value, currency, and optionally, a unit of exchange.",
  "keywords": ["business-and-finance", "business", "finance", "monetary amount", "currency", "value", "amount", "financial data"],
  "example": {
    "value": 1500.00,
    "currency": "USD",
    "unit": "Dollar",
    "formattedAmount": "$1,500.00",
    "keywords": ["amount", "currency", "value", "USD"],
    "relatedAmounts": [
      {
        "value": 500.00,
        "currency": "EUR",
        "formattedAmount": "€500.00"
      },
      {
        "value": 1000.00,
        "currency": "GBP",
        "formattedAmount": "£1,000.00"
      }
    ]
  }
}
