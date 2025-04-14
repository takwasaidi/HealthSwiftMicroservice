# 📢Actualite  Module

This module is part of the HealthSwift system and is responsible for managing news or announcements. It allows you to create, read, update, and delete news items through a Spring Boot backend. The module is integrated into a microservice architecture using Eureka, Spring Cloud Gateway, and MySQL.


---

## 🔧 Technologies Used

### Backend (Spring Boot)

- Java 17+
- Spring Boot 
- Spring Data JPA
- Spring Web
- Lombok
- MySQL
- Maven
- Eureka (Discovery Server)
- API Gateway
- Spring Security

### Frontend (Angular)

- Angular 
- Angular Reactive Forms
- Bootstrap 
- Angular HTTPClient
- Angular Router

---

## 🚀 Getting Started

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/takwasaidi/HealthSwiftMicroservice.git
   cd HealthSwiftMicroservice
   ```

2. **Set up the database:**

   - Create a MySQL database called `healthswift`.

3. **Configure `application.properties`:**
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/healthswift
   spring.datasource.username=root
   spring.datasource.password=
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
   ```

4. **Run the application:**
   ```bash
   ./mvnw spring-boot:run
   ```
   Or from your IDE. The app runs on `http://localhost:8222`.

---

### Frontend Setup

1. **Navigate to the frontend project:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the Angular app:**
   ```bash
   ng serve
   ```
   Visit `http://localhost:4200` in your browser.


---

## 📬 API Endpoints

> All endpoints require a `userId` to be passed via HTTP headers by the gateway.

| Method | Endpoint            | Description         |
|--------|---------------------|---------------------|
| GET    | `/Actualite`        | Get all news        |
| GET    | `/Actualite/{id}`   | Get news by ID      |
| POST   | `/Actualite`        | Create a new news   |
| PUT    | `/Actualite/{id}`   | Update a news       |
| DELETE | `/Actualite/{id}`   | Delete a news by ID |

---

## 🧪 Testing with Postman

### Headers

Make sure to always include:
### Sample POST Request

**POST** `http://localhost:8222/api/Actualite`

```json
{
  "titre": "New Title",
  "description": "New Description",
  "type_pub_cible": "Private",
  "theme": "New Theme",
  "image": "new.jpg",
  "idEvent": 200
}
```

---

### Sample PUT Request

**PUT** `http://localhost:8222/api/Actualite/1`

```json
{
  "titre": "Updated Title",
  "description": "Updated Description",
  "type_pub_cible": "Public",
  "theme": "Updated Theme",
  "image": "updated.jpg",
  "idEvent": 300
}

```

---

### Sample GET Request

**GET** `GET http://localhost:8222/api/Actualite`
### Sample GET Request

**GET** `GET http://localhost:8222/api/Actualite/1`


### Sample DELETE Request

**DELETE** `http://localhost:8222/api/Actualite/1`
`

---
---

## 📁 Folder Structure

```
Actualite/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/Actualite/
│   │   │       ├── controller/
│   │   │       ├── model/
│   │   │       ├── repository/
│   │   │       ├── service/
│   │   │       └── ActualiteApplication.java
│   │   └── resources/
│   │       └── application.yml
├── target/
├── Dockerfile
├── pom.xml

```
For any inquiries or contributions, you are encouraged to reach out to the maintainer or open an issue.
