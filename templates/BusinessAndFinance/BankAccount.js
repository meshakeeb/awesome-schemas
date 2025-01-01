export default {
  "title": "Bank Account",
  "description": "Schema representing a bank account, including details such as account number, account type, balance, and associated transactions.",
  "category": ["business-and-finance"],
  "keywords": ["business", "finance", "bank account", "checking", "savings", "balance", "transactions", "account holder"],
  "example": {
    "accountNumber": "9876543210",
    "accountHolder": {
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "janesmith@example.com",
      "phone": "+1-234-567-890"
    },
    "accountType": "Savings",
    "balance": 15000.50,
    "currency": "USD",
    "accountStatus": "Active",
    "createdDate": "2021-03-10",
    "lastTransactionDate": "2024-12-29",
    "transactions": [
      {
        "transactionId": "T2001",
        "date": "2024-12-28",
        "amount": -500.00,
        "transactionType": "Debit",
        "description": "Withdrawal from ATM"
      },
      {
        "transactionId": "T2002",
        "date": "2024-12-29",
        "amount": 1000.00,
        "transactionType": "Credit",
        "description": "Direct deposit from employer"
      }
    ],
    "interestRate": 1.5,
    "overdraftLimit": 1000.00,
    "keywords": ["bank account", "savings account", "debit", "credit", "transactions", "interest"],
    "relatedAccounts": [
      {
        "accountNumber": "1234567890",
        "accountHolder": "John Doe",
        "url": "https://example.com/account/1234567890"
      }
    ],
    "officialWebsite": "https://www.examplebank.com"
  }
}
