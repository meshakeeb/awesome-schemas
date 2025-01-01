export default {
  "title": "Parcel Delivery",
  "description": "Schema representing the delivery of a parcel, including information about the delivery status, carrier, tracking number, and expected delivery date.",
  "category": ["order"],
  "keywords": ["order", "parcel delivery", "shipping", "carrier", "tracking number", "delivery status", "delivery date"],
  "example": {
    "@type": "ParcelDelivery",
    "trackingNumber": "1Z9999W99999999999",
    "deliveryStatus": "InTransit",
    "estimatedDeliveryDate": "2025-01-05",
    "carrier": {
      "@type": "Organization",
      "name": "UPS"
    },
    "origin": {
      "@type": "Place",
      "name": "Los Angeles, CA",
      "address": "123 Main St, Los Angeles, CA 90001"
    },
    "destination": {
      "@type": "Place",
      "name": "New York, NY",
      "address": "456 Broadway, New York, NY 10001"
    },
    "additionalType": "https://schema.org/ParcelDelivery",
    "trackingUrl": "https://www.ups.com/track?loc=en_US&tracknum=1Z9999W99999999999"
  }
}
