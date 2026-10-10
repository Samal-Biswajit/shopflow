# Shopflow Frontend

React-based frontend for the Shopflow e-commerce application, built with **React 19**, **React Router 7**, and **Vite**.

## 📁 Structure

```
├── src/
│   ├── components/          # Shared UI components
│   │   ├── Header.jsx       # Navigation header with search
│   │   └── Header.css
│   ├── pages/
│   │   ├── home/            # Product catalog page
│   │   ├── checkout/        # Cart & checkout flow
│   │   ├── orders/          # Order history
│   │   └── TrackingPage.jsx # Order tracking
│   ├── utils/
│   │   ├── money.js         # Currency formatting
│   │   └── money.test.js    # Unit tests
│   ├── App.jsx              # Root component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/images/           # Static product images & icons
├── index.html               # HTML template
├── vite.config.js           # Vite configuration (includes API proxy)
└── reakt.txt                # Personal notes
```

## 🚀 Setup

```bash
npm install
npm run dev       # Start dev server on http://localhost:5173
npm run build     # Production build to dist/
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## ⚙️ Configuration

The Vite dev server proxies `/api` and `/images` requests to `http://localhost:3000` (the backend). See `vite.config.js` for details.
