# Shopflow

A full-stack e-commerce web application built with **React 19** and **Express.js**, powered by **MongoDB Atlas**.

## ✨ Features

- **Product Catalog** — Browse 40+ products with images, ratings, and prices
- **Product Search** — Search products by name or keyword
- **Shopping Cart** — Add, update quantities, and remove items
- **Checkout Flow** — Select delivery options per item with real-time price updates
- **Payment Summary** — Dynamic cost breakdown (items, shipping, tax, total)
- **Order Placement** — Place orders and view order history
- **Order Tracking** — Track delivery status of placed orders

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, React Router 7, Vite |
| Backend | Express.js, Node.js |
| Database | MongoDB Atlas (Mongoose ODM) |
| Styling | Vanilla CSS |
| HTTP Client | Axios |
| Testing | Vitest, Testing Library |

## 📁 Project Structure

```
shopflow/
├── ecommerce-backend/     # Express API server
│   ├── controllers/       # Request handlers (business logic)
│   ├── models/            # Mongoose schemas
│   ├── routes/            # Express route definitions
│   ├── defaultData/       # Seed data for initial setup
│   ├── images/            # Static product images
│   └── server.js          # Entry point
│
├── ecommerce-project/     # React frontend (Vite)
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components (Home, Checkout, Orders, Tracking)
│   │   └── utils/         # Helper functions
│   └── public/            # Static assets
│
└── ProjectCamp/           # Reference backend architecture
```

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)

### 1. Backend Setup
```bash
cd ecommerce-backend
npm install
# Create .env with your MONGO_URI
npm run dev
```

### 2. Frontend Setup
```bash
cd ecommerce-project
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and proxies API calls to the backend on `http://localhost:3000`.

## 📝 License

MIT
