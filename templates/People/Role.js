export default {
  "title": "Role",
  "description": "Schema representing a role or position held by an individual within an organization, project, or context. It includes the responsibilities, functions, and scope of the role.",
  "category": ["people"],
  "keywords": ["people", "role", "position", "job title", "responsibility", "function", "duties"],
  "example": {
    "@type": "Role",
    "name": "Project Manager",
    "description": "Responsible for overseeing the planning, execution, and delivery of projects, ensuring that all milestones are met and resources are allocated effectively.",
    "identifier": "PM5678",
    "roleName": "Project Manager",
    "roleType": "Leadership",
    "responsibilities": [
      "Managing project scope, schedule, and resources.",
      "Coordinating between team members, clients, and stakeholders.",
      "Ensuring timely delivery of project outcomes.",
      "Tracking project progress and making adjustments as necessary."
    ],
    "skillsRequired": [
      "Project Management",
      "Leadership",
      "Communication",
      "Risk Management"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "Tech Innovations Inc."
    }
  }
}
