# ShopFlow — Backend

The Express.js REST API backend for ShopFlow, using **Sequelize ORM** with **SQLite**.

## Setup

1. Make sure you have [Node.js](https://nodejs.org/) v22+ installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:8080`.

## Data Models

| Model | Description |
|---|---|
| `Product` | Product catalog (name, price, image, rating) |
| `CartItem` | Shopping cart items linked to products |
| `DeliveryOption` | Shipping speed & pricing options |
| `Order` | Placed orders with order items |

## API Routes

- `GET /api/products` — Fetch all products
- `GET/POST/PUT/DELETE /api/cart-items` — Cart CRUD operations
- `GET /api/delivery-options` — Available delivery options
- `GET /api/payment-summary` — Order cost breakdown
- `GET/POST /api/orders` — Order management
- `POST /api/reset` — Reset database to defaults

## Troubleshooting

See the [troubleshooting guide](troubleshooting.md) for common issues.

## Attribution

Backend based on the [SuperSimpleDev ecommerce project](https://github.com/SuperSimpleDev/ecommerce-project).
