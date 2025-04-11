<h1 align="center">📥 Request Management Module</h1>
📌 About the Module
The Request Management module enables users to submit, track, and manage donation requests within a centralized and transparent environment. It is a core component of the overall Donation & Campaign Management System.

🎯 Main Objective
Allow users (Donors, Campaign Directors, etc.) to submit donation requests for specific needs.

Provide clear traceability of each request’s progress.

Ensure a structured and efficient request handling process.

✨ Key Features
Request Submission: Dynamic form to input needs, supporting documents, and objectives.

Status Tracking: Each request progresses through defined statuses (Pending, Approved, Rejected, In Progress, etc.).

Request History: Chronological view of previous requests and their statuses.

🧰 Tech Stack
Backend: Spring Boot  (dedicated microservice: DemandeService)

Database: Mysql

Security: Keycloak integration for role-based access control

Frontend: Angular with modular UI components

REST API: Full CRUD support with secured endpoints

🔐 Roles & Permissions
Donor: Can create and view their own requests

Campaign Director: Can review and manage requests linked to their campaigns

Administrator: Can view and manage all requests across the system

🔄 Request Lifecycle
Creation by a donor

Evaluation by a campaign director

Status update (approved/rejected/etc.)

Notification sent to the requester

Archived once resolved

🧪 Testing & Validation
Integration Testing via Postman & Swagger

Functional UI Scenarios tested in Angular frontend

🏁 Conclusion
The Request Module reinforces the platform’s values of engagement, transparency, and efficiency in handling donation solicitations. It ensures that all requests are visible, tracked, and fairly processed.
