export default {
  "title": "Loan Or Credit",
  "description": "Schema representing a loan or credit product, including details such as the loan amount, interest rate, term, fees, and borrower requirements.",
  "keywords": ["business-and-finance", "business", "finance", "loan", "credit", "interest rate", "fees", "loan amount", "borrower requirements"],
  "example": {
    "loanName": "Personal Loan",
    "loanType": "Unsecured",
    "lender": "ABC Bank",
    "loanAmount": 10000.00,
    "interestRate": 7.5,
    "loanTerm": "36 months",
    "monthlyPayment": 315.45,
    "totalInterest": 1365.00,
    "fees": {
      "originationFee": 150.00,
      "latePaymentFee": 35.00
    },
    "repaymentMethod": "Monthly",
    "eligibilityCriteria": [
      "Must be a U.S. resident",
      "Minimum credit score: 650",
      "Minimum annual income: $30,000"
    ],
    "loanStatus": "Approved",
    "approvedAmount": 10000.00,
    "disbursementDate": "2024-01-01",
    "keywords": ["personal loan", "credit", "repayment", "loan fees", "interest rate"],
    "relatedLoans": [
      {
        "loanName": "Auto Loan",
        "url": "https://examplebank.com/auto-loan"
      },
      {
        "loanName": "Mortgage Loan",
        "url": "https://examplebank.com/mortgage-loan"
      }
    ],
    "officialWebsite": "https://www.abcbank.com"
  }
}
