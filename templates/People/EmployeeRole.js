export default {
  "title": "Employee Role",
  "description": "Schema representing the role of an employee within an organization. This includes the responsibilities, position, and other key details about the employee's job or role.",
  "keywords": ["people", "employee", "role", "job title", "position", "work", "responsibilities"],
  "example": {
    "@type": "EmployeeRole",
    "name": "Software Engineer",
    "description": "Responsible for developing and maintaining software applications, including coding, testing, and debugging.",
    "identifier": "SE1234",
    "employee": {
      "@type": "Person",
      "name": "John Doe",
      "jobTitle": "Software Engineer",
      "worksFor": {
        "@type": "Organization",
        "name": "Tech Innovations Inc."
      }
    },
    "dateStarted": "2021-06-01",
    "salary": {
      "@type": "MonetaryAmount",
      "value": "80000",
      "currency": "USD"
    },
    "responsibilities": [
      "Developing new features and functionality for software applications.",
      "Collaborating with the product team to design technical solutions.",
      "Maintaining existing codebase and optimizing for performance."
    ],
    "skillsRequired": [
      "JavaScript",
      "Python",
      "Database Management",
      "Problem-solving"
    ]
  }
}
