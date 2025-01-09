export default {
  "title": "Merchant Return Policy",
  "description": "Schema representing a merchant's return policy, which includes details about the terms and conditions of returning items, the duration of the return period, and specific requirements for returns or exchanges.",
  "keywords": ["order", "merchant return policy", "return policy", "return terms", "exchange policy", "refund policy", "e-commerce returns"],
  "example": {
    "@type": "MerchantReturnPolicy",
    "name": "30-Day Return Policy",
    "description": "Items can be returned within 30 days of purchase for a full refund or exchange. The item must be in original condition and packaging.",
    "url": "https://www.example.com/return-policy",
    "returnMethod": "Return by Mail",
    "returnFees": {
      "@type": "MonetaryAmount",
      "value": "0.00",
      "currency": "USD"
    },
    "returnPolicyCategory": "Full Refund",
    "eligibleRegion": {
      "@type": "Place",
      "name": "United States"
    },
    "acceptedPaymentMethod": [
      {
        "@type": "PaymentMethod",
        "name": "Credit Card"
      },
      {
        "@type": "PaymentMethod",
        "name": "PayPal"
      }
    ],
    "returnPolicySeasonalOverride": {
      "@type": "ReturnPolicySeasonalOverride",
      "name": "Holiday Return Extension",
      "startDate": "2025-11-01",
      "endDate": "2025-12-31",
      "description": "Returns for items purchased between November 1st and December 31st can be made until January 15th."
    }
  }
}
