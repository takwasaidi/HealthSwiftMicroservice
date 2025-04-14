# 📢 Reclamation Module

This module is part of a larger system and is responsible for managing user reclamations (complaints or requests). It allows users to submit, view, update, and delete reclamations. It includes both a Spring Boot backend and an Angular frontend.

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

| Method | Endpoint               | Description               |
|--------|------------------------|---------------------------|
| GET    | `/reclamations`        | Get all reclamations      |
| GET    | `/reclamations/{id}`   | Get a reclamation by ID   |
| POST   | `/reclamations`        | Create a new reclamation  |
| PUT    | `/reclamations/{id}`   | Update a reclamation      |
| DELETE | `/reclamations/{id}`   | Delete a reclamation      |

---

## 🧪 Testing with Postman

### Headers

Make sure to always include:

```
userId: 1
Content-Type: application/json
```

### Sample POST Request

**POST** `http://localhost:8222/reclamations`

```json
{
  "titre": "Connexion lente",
  "description": "Ma connexion est très lente depuis 3 jours.",
  "statut": "En attente",
  "type": "Technique"
}
```

---

### Sample PUT Request

**PUT** `http://localhost:8222/reclamations/1`

```json
{
  "titre": "Connexion lente - mise à jour",
  "description": "Problème toujours présent.",
  "statut": "En attente",
  "type": "Technique"
}
```

---

### Sample GET Request

**GET** `http://localhost:8222/reclamations`

### Sample DELETE Request

**DELETE** `http://localhost:8222/reclamations/1`

---

## 🖼️ Frontend Form Preview

The Angular UI form to add a new reclamation looks like this:

```html
<div class="d-flex justify-content-center align-items-center min-vh-100">
  <form [formGroup]="reclamationForm" (ngSubmit)="onSubmit()"
        class="p-5 rounded-4 shadow-lg"
        style="width: 100%; max-width: 600px; background-color: #ffffff; border: 1px solid #dee2e6;">
  
    <h2 class="text-center mb-4" style="color: rgb(56, 141, 168); font-weight: bold;">
      Ajouter une Réclamation
    </h2>

    <div class="form-group mb-4">
      <label for="titre" class="form-label fw-semibold">Titre</label>
      <input id="titre" formControlName="titre" placeholder="Titre de la réclamation" class="form-control form-control-lg rounded-3" />
    </div>

    <div class="form-group mb-4">
      <label for="description" class="form-label fw-semibold">Description</label>
      <textarea id="description" formControlName="description" placeholder="Description de la réclamation" class="form-control form-control-lg rounded-3"></textarea>
    </div>

    <div class="form-group mb-4">
      <label for="statut" class="form-label fw-semibold">Statut</label>
      <select id="statut" formControlName="statut" class="form-control form-control-lg rounded-3">
        <option value="" disabled selected>Choisir un statut</option>
        <option value="En attente">En attente</option>
        <option value="Traitée">Traitée</option>
        <option value="Rejetée">Rejetée</option>
      </select>
    </div>

    <div class="form-group mb-4">
      <label for="type" class="form-label fw-semibold">Type</label>
      <select id="type" formControlName="type" class="form-control form-control-lg rounded-3">
        <option value="" disabled selected>Choisir un type</option>
        <option value="Technique">Technique</option>
        <option value="Administratif">Administratif</option>
        <option value="Autre">Autre</option>
      </select>
    </div>

    <button type="submit" class="btn btn-lg w-100"
            style="background-color: rgb(56, 141, 168); color: white; font-weight: bold;">
      Ajouter la Réclamation
    </button>
  </form>
</div>
```

---

## 📁 Folder Structure

```
reclamation-service/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/reclamation/
│   │   │       ├── controller/
│   │   │       ├── model/
│   │   │       ├── repository/
│   │   │       ├── service/
│   │   │       └── ReclamationApplication.java
│   │   └── resources/
│   │       └── application.yml
```


For questions or contributions, feel free to open an issue or reach out to the maintainer.
