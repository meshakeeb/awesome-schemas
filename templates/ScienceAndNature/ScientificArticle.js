export default {
  "title": "Scientific Article",
  "description": "Schema representing a scientific article, which includes details about the article’s title, author(s), publication date, journal, and other academic information.",
  "category": ["science-and-nature"],
  "keywords": ["science", "nature", "scientific article", "research paper", "academic article", "peer-reviewed", "scientific journal", "research findings", "publication"],
  "example": {
    "title": "Advancements in Quantum Computing: A Comprehensive Review",
    "author": [
      {
        "@type": "Person",
        "name": "Dr. John Doe",
        "url": "https://www.example.com/authors/johndoe"
      },
      {
        "@type": "Person",
        "name": "Dr. Jane Smith",
        "url": "https://www.example.com/authors/janesmith"
      }
    ],
    "datePublished": "2024-01-01",
    "journal": {
      "@type": "Periodical",
      "name": "Journal of Quantum Computing",
      "issn": "1234-5678",
      "publisher": {
        "@type": "Organization",
        "name": "Scientific Publishing House"
      }
    },
    "abstract": "This article provides an overview of recent advancements in quantum computing, focusing on algorithmic improvements, hardware developments, and practical applications in industry.",
    "keywords": ["quantum computing", "algorithms", "hardware", "applications", "science"],
    "citation": "Doe, J., & Smith, J. (2024). Advancements in Quantum Computing: A Comprehensive Review. Journal of Quantum Computing, 10(1), 1-50.",
    "sameAs": [
      "https://www.example.com/scientific-articles/advancements-in-quantum-computing"
    ]
  }
}
