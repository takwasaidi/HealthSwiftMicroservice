# 🌟 Gestion des Matériaux - Documentation

Bienvenue dans l'univers de la gestion des dons matériels ! Ce microservice vous permet de gérer efficacement les équipements médicaux, médicaments, et autres ressources essentielles pour le système de santé.

---

## 🚀 Introduction

Le microservice **material-service** est conçu pour simplifier la gestion des dons matériels. Que ce soit pour ajouter un nouveau don, consulter les ressources disponibles, ou mettre à jour les informations, tout est à portée de main grâce à des endpoints RESTful intuitifs.

Prêt à faire une différence ? Commençons !

---

## 🔗 Endpoints du Microservice

Voici la liste des endpoints disponibles pour interagir avec le microservice :

| Endpoint            | Description                           | Méthode HTTP | Exemple de Corps de Requête                                                                 |
|---------------------|---------------------------------------|--------------|---------------------------------------------------------------------------------------------|
| `/api/materials`    | Créer un nouveau don matériel         | POST         | ```json { "name": "Masques chirurgicaux", "description": "Lot de 100 masques", "quantity": 100, "donated_by": "Hôpital Central" } ``` |
| `/api/materials`    | Récupérer tous les dons matériels     | GET          | -                                                                                           |
| `/api/materials/{id}` | Récupérer un don matériel par son ID | GET          | -                                                                                           |
| `/api/materials/{id}` | Mettre à jour un don matériel        | PUT          | ```json { "name": "Lit médicalisé", "description": "Lit avec accessoires", "quantity": 5, "donated_by": "Clinique Saint-Jean" } ``` |
| `/api/materials/{id}` | Supprimer un don matériel            | DELETE       | -                                                                                           |

---

## 🛠️ Comment Exécuter le Microservice

Pour exécuter le microservice **material-service**, suivez ces étapes simples :

### Étape 1 : Configurez votre environnement
- Assurez-vous d'avoir installé [Node.js](https://nodejs.org/) sur votre machine.
- Installez les dépendances nécessaires en exécutant la commande suivante dans le répertoire du projet :
  ```bash
  npm install
  npm start
