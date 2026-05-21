# ShopFlow

A full-stack e-commerce web application built with **React 19** and **Express.js**. Features a product catalog, shopping cart, checkout flow with delivery options, order tracking, and a payment summary — all powered by a RESTful API backend.

## ✨ Features

- **Product Catalog** — Browse 40+ products with images, ratings, and prices
- **Shopping Cart** — Add, update quantities, and remove items
- **Checkout Flow** — Select delivery options per item with real-time price updates
- **Payment Summary** — Dynamic cost breakdown (items, shipping, tax, total)
- **Order Placement** — Place orders and view order history
- **Order Tracking** — Track delivery status of placed orders
- **Unit & Integration Tests** — Automated testing with Vitest and Testing Library

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, React Router, Axios |
| Backend | Express.js, Sequelize ORM, SQLite |
| Testing | Vitest, Testing Library, jsdom |
| Tooling | ESLint, Nodemon |

## 📁 Project Structure

```
├── ecommerce-project/       # React frontend (Vite)
│   ├── public/images/        # Product & UI assets
│   └── src/
│       ├── components/       # Reusable components (Header)
│       ├── pages/            # Page components
│       │   ├── home/         # Product catalog
│       │   ├── checkout/     # Cart & payment flow
│       │   ├── orders/       # Order history
│       │   └── TrackingPage  # Delivery tracking
│       └── utils/            # Helpers & tests
│
└── ecommerce-backend/       # Express API server
    ├── models/               # Sequelize data models
    ├── routes/               # REST API endpoints
    └── images/               # Backend-served assets
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v22 or higher
- npm (comes with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/Samal-Biswajit/shopflow.git
cd shopflow
```

### 2. Set up the backend

```bash
cd ecommerce-backend
npm install
npm run dev
```

The API server will start on `http://localhost:8080`.

### 3. Set up the frontend

Open a new terminal:

```bash
cd ecommerce-project
npm install
npm run dev
```

The frontend will start on `http://localhost:5173` and proxy API requests to the backend.

### 4. Run tests

```bash
cd ecommerce-project
npx vitest
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/products` | Fetch all products |
| `GET` | `/api/cart-items` | Get cart contents |
| `POST` | `/api/cart-items` | Add item to cart |
| `PUT` | `/api/cart-items/:id` | Update cart item |
| `DELETE` | `/api/cart-items/:id` | Remove from cart |
| `GET` | `/api/delivery-options` | Get delivery options |
| `GET` | `/api/payment-summary` | Get order cost breakdown |
| `POST` | `/api/orders` | Place an order |
| `GET` | `/api/orders` | Get order history |

## 📝 License

This project was built for learning purposes following a React course by [SuperSimpleDev](https://github.com/SuperSimpleDev).
