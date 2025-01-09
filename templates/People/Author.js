export default {
  "title": "Author",
  "description": "Schema representing an author, which is an individual responsible for creating or writing a work such as a book, article, blog post, or other types of content. It includes details like the author's name, biography, and associated works.",
  "keywords": ["people", "author", "writer", "creator", "biography", "books", "articles", "works"],
  "example": {
    "@type": "Person",
    "name": "J.K. Rowling",
    "jobTitle": "Author",
    "biography": "J.K. Rowling is a British author best known for writing the Harry Potter series, one of the best-selling book series in history.",
    "sameAs": "https://www.jkrowling.com",
    "url": "https://www.jkrowling.com",
    "birthDate": "1965-07-31",
    "birthPlace": {
      "@type": "Place",
      "name": "Yate, Gloucestershire, England"
    },
    "works": [
      {
        "@type": "Book",
        "name": "Harry Potter and the Sorcerer's Stone",
        "author": {
          "@type": "Person",
          "name": "J.K. Rowling"
        },
        "publisher": "Scholastic",
        "datePublished": "1997-09-01"
      },
      {
        "@type": "Book",
        "name": "Harry Potter and the Chamber of Secrets",
        "author": {
          "@type": "Person",
          "name": "J.K. Rowling"
        },
        "publisher": "Scholastic",
        "datePublished": "1998-07-02"
      }
    ],
    "image": "https://www.jkrowling.com/images/jkrowling.jpg"
  }
}
