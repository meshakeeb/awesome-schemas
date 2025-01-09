export default {
  "title": "Account",
  "description": "Schema representing a user account, including details such as the account holder's name, account type, balance, and associated transactions.",
  "keywords": ["business-and-finance", "business", "finance", "account", "user", "balance", "transactions", "profile", "account holder"],
  "example": {
    "accountNumber": "1234567890",
    "accountHolder": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "johndoe@example.com",
      "phone": "+1-234-567-890"
    },
    "accountType": "Checking",
    "balance": 3500.75,
    "currency": "USD",
    "accountStatus": "Active",
    "createdDate": "2022-05-15",
    "lastTransactionDate": "2024-12-28",
    "transactions": [
      {
        "transactionId": "T1001",
        "date": "2024-12-25",
        "amount": -200.00,
        "transactionType": "Debit",
        "description": "Payment for groceries"
      },
      {
        "transactionId": "T1002",
        "date": "2024-12-27",
        "amount": 500.00,
        "transactionType": "Credit",
        "description": "Salary deposit"
      }
    ],
    "accountLinks": [
      {
        "type": "Linked Account",
        "accountNumber": "9876543210",
        "bankName": "Example Bank"
      }
    ],
    "keywords": ["bank account", "user profile", "balance", "transactions"],
    "relatedAccounts": [
      {
        "accountNumber": "2233445566",
        "accountHolder": "Jane Smith",
        "url": "https://example.com/account/2233445566"
      }
    ],
    "officialWebsite": "https://www.examplebank.com"
  }
}
