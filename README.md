# E-Commerce Backend API

This is the backend for an E-Commerce application built with Node.js, Express, and MongoDB.

**Live Base URL:** [https://ecommerce-backend-assignment-kmrf.onrender.com](https://ecommerce-backend-assignment-kmrf.onrender.com)

## Table of Contents
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [Root](#root)
  - [Users API](#users-api)
  - [Products API](#products-api)
- [Deployment](#deployment)

---

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## API Endpoints

### Root
**GET** `/`
- **Description:** Health check to verify the API is running.
- **Request Body:** None

---

### Users API

#### 1. Register / Create User
**POST** `/api/users/`
- **Description:** Creates a new user in the database.
- **JSON Request Body:**
  ```json
  {
    "name": "testing",
    "email": "test@gmail.com",
    "password": "securepassword123",
    "age": 25,          
    "phone": "1234567890", 
    "isAdmin": false    
  }
  ```

#### 2. Login User
**POST** `/api/users/login`
- **Description:** Authenticates a user.
- **JSON Request Body:**
  ```json
  {
    "email": "test@gmail.com",
    "password": "securepassword123"
  }
  ```

#### 3. Get All Users
**GET** `/api/users/`
- **Description:** Retrieves a list of all users.
- **Request Body:** None

#### 4. Get User By ID
**GET** `/api/users/:id`
- **Description:** Retrieves a single user's details by their database ID.
- **Request Body:** None

#### 5. Update User
**PUT** `/api/users/:id`
- **Description:** Updates details for a specific user.
- **JSON Request Body (include any fields you want to update):**
  ```json
  {
    "name": "testing Updated",
    "age": 26,
    "phone": "0987654321"
  }
  ```

#### 6. Delete User
**DELETE** `/api/users/:id`
- **Description:** Deletes a specific user by their ID.
- **Request Body:** None

---

### Products API

#### 1. Create Product
**POST** `/api/products/`
- **Description:** Adds a new product to the catalog.
- **JSON Request Body:**
  ```json
  {
    "title": "Wireless Headphones",
    "description": "High-quality noise-canceling headphones.",
    "price": 199.99,
    "discount": 10,        // optional, defaults to 0
    "isAvailable": true    // optional, defaults to true
  }
  ```

#### 2. Get All Products
**GET** `/api/products/`
- **Description:** Retrieves the list of all available products.
- **Request Body:** None

#### 3. Get Product By ID
**GET** `/api/products/:id`
- **Description:** Retrieves a specific product by its database ID.
- **Request Body:** None

#### 4. Update Product
**PUT** `/api/products/:id`
- **Description:** Updates details of an existing product.
- **JSON Request Body (include any fields you want to update):**
  ```json
  {
    "price": 179.99,
    "discount": 15,
    "isAvailable": false
  }
  ```

#### 5. Delete Product
**DELETE** `/api/products/:id`
- **Description:** Removes a product from the catalog.
- **Request Body:** None

---

## Deployment

This application is fully configured for deployment on [Render](https://render.com). 

**Live API URL:** `https://ecommerce-backend-assignment-kmrf.onrender.com`

You can test all endpoints by appending them to the live API URL above (e.g., `https://ecommerce-backend-assignment-kmrf.onrender.com/api/products`).
