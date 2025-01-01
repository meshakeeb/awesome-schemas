export default {
  "title": "Job Posting",
  "description": "Schema representing a job posting, detailing the requirements, responsibilities, and compensation for a job. This schema includes information about the job title, employer, salary, job location, and how to apply.",
  "category": ["jobs-and-employment"],
  "keywords": ["jobs", "employment", "job posting", "career opportunity", "job description", "employment", "hiring", "recruitment"],
  "example": {
    "title": "Software Engineer",
    "description": "We are looking for a skilled and passionate Software Engineer to join our development team. The ideal candidate will have experience in Python and JavaScript and a strong problem-solving ability.",
    "datePosted": "2025-01-01",
    "employmentType": "Full-time",
    "hiringOrganization": {
      "name": "Tech Solutions Ltd.",
      "sameAs": "https://www.techsolutions.com",
      "logo": "https://www.techsolutions.com/logo.png"
    },
    "jobLocation": {
      "address": {
        "streetAddress": "123 Tech Street",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94105",
        "addressCountry": "US"
      }
    },
    "salary": {
      "value": "120000",
      "currency": "USD",
      "unitText": "YEAR"
    },
    "responsibilities": [
      "Develop and maintain web applications",
      "Collaborate with cross-functional teams to define project requirements",
      "Write clean, scalable, and efficient code",
      "Troubleshoot and debug software issues"
    ],
    "qualifications": [
      "Bachelor's degree in Computer Science or related field",
      "2+ years of software development experience",
      "Proficiency in Python and JavaScript",
      "Excellent communication skills"
    ],
    "skills": [
      "Python",
      "JavaScript",
      "Django",
      "React.js",
      "Version Control (Git)"
    ],
    "applicationContact": {
      "name": "John Doe",
      "email": "john.doe@techsolutions.com",
      "telephone": "+1-800-123-4567"
    },
    "howToApply": "Please submit your resume and cover letter through the Tech Solutions career portal at https://www.techsolutions.com/careers."
  }
}
