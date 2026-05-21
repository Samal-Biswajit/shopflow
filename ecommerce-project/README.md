# ShopFlow — Frontend

The React frontend for ShopFlow, built with **React 19** and **Vite**.

## Pages

- **Home** — Product catalog with search and add-to-cart functionality
- **Checkout** — Cart items with delivery option selection and payment summary
- **Orders** — Order history with item details
- **Tracking** — Delivery tracking for placed orders

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npx vitest` | Run tests |

## Project Structure

```
src/
├── components/        # Shared components (Header)
├── pages/
│   ├── home/          # HomePage, Product, ProductsGrid
│   ├── checkout/      # CheckoutPage, DeliveryOptions, OrderSummary, PaymentSummary
│   ├── orders/        # OrdersPage
│   └── TrackingPage   # Delivery tracking
├── utils/             # Helper functions (money formatting)
├── App.jsx            # Root component with routing
└── main.jsx           # Entry point
```
