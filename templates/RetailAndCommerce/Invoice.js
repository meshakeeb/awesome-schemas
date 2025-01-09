export default {
  "title": "Invoice",
  "description": "Schema representing an invoice, which includes information about the goods or services provided, the total cost, and payment details.",
  "keywords": ["retail-and-commerce", "retail", "commerce", "invoice", "billing", "transaction", "receipt", "payment", "financial document", "sale", "purchase"],
  "example": {
    "@type": "Invoice",
    "invoiceNumber": "INV12345",
    "dateIssued": "2025-01-01",
    "totalPrice": {
      "@type": "MonetaryAmount",
      "value": 150.00,
      "currency": "USD"
    },
    "paymentStatus": "Paid",
    "paymentMethod": "Credit Card",
    "billingAddress": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Anytown",
      "addressRegion": "CA",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "seller": {
      "@type": "Organization",
      "name": "Example Store",
      "logo": "https://example.com/logo.png"
    },
    "itemList": [
      {
        "@type": "InvoiceItem",
        "name": "Smartphone XYZ",
        "quantity": 1,
        "price": {
          "@type": "MonetaryAmount",
          "value": 100.00,
          "currency": "USD"
        }
      },
      {
        "@type": "InvoiceItem",
        "name": "Phone Case",
        "quantity": 1,
        "price": {
          "@type": "MonetaryAmount",
          "value": 50.00,
          "currency": "USD"
        }
      }
    ]
  }
}
