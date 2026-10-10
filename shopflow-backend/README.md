# Shopflow Backend

RESTful API server for the Shopflow e-commerce application, built with **Express.js** and **MongoDB** (Mongoose ODM).

## 📁 Structure

```
├── controllers/       # Business logic for each resource
│   ├── product.controller.js
│   ├── cartItem.controller.js
│   ├── order.controller.js
│   ├── deliveryOption.controller.js
│   ├── paymentSummary.controller.js
│   └── reset.controller.js
├── models/            # Mongoose schemas
│   ├── Product.js
│   ├── CartItem.js
│   ├── Order.js
│   ├── DeliveryOption.js
│   └── index.js       # DB connection
├── routes/            # Express router definitions
├── defaultData/       # Seed data for initial database population
├── images/            # Static product/icon images
└── server.js          # App entry point
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Get all products (supports `?search=` and `?expand=estimated`) |
| GET | `/api/cart-items` | Get cart items (supports `?expand=product`) |
| POST | `/api/cart-items` | Add item to cart |
| PUT | `/api/cart-items/:productId` | Update cart item (quantity or delivery option) |
| DELETE | `/api/cart-items/:productId` | Remove item from cart |
| GET | `/api/orders` | Get all orders (supports `?expand=products`) |
| POST | `/api/orders` | Place a new order |
| GET | `/api/orders/:orderId` | Get a single order |
| GET | `/api/delivery-options` | Get delivery options |
| GET | `/api/payment-summary` | Get payment summary for current cart |
| POST | `/api/reset` | Reset database to default data |

## 🚀 Setup

```bash
npm install
cp .env.example .env   # Add your MONGO_URI
npm run dev             # Start with nodemon
```

## 🔧 Environment Variables

| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB Atlas connection string |
| `PORT` | Server port (default: 3000) |
