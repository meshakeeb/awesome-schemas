export default {
  "title": "Trade Action",
  "description": "Schema representing an action performed in a trade, including details such as the trade type (buy or sell), price, quantity, and execution time.",
  "keywords": ["business-and-finance", "business", "finance", "trade action", "buy", "sell", "trade execution", "quantity", "price", "trade type"],
  "example": {
    "tradeType": "Buy",
    "instrument": "BTC/USD",
    "price": 45000.00,
    "quantity": 0.5,
    "tradeDate": "2024-01-01T10:00:00Z",
    "executionTime": "2024-01-01T10:00:05Z",
    "broker": "XYZ Trading Platform",
    "transactionFee": 25.00,
    "totalAmount": 22500.00,
    "keywords": ["buy", "sell", "BTC/USD", "trade action", "execution time"],
    "relatedActions": [
      {
        "tradeType": "Sell",
        "instrument": "BTC/USD",
        "price": 46000.00,
        "quantity": 0.5,
        "tradeDate": "2024-01-01T12:00:00Z"
      }
    ],
    "officialWebsite": "https://www.xyztradingplatform.com"
  }
}
