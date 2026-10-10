import { Link, useNavigate, useSearchParams } from "react-router";
import { useState } from "react";

import "./Header.css";

export function Header({cart}) {

  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const navigate = useNavigate();

  let totalQuantity = 0;

  cart.forEach(cartItem => {
    totalQuantity+= cartItem.quantity;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate(`/`);
    }
  };
  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>Shopflow</span>
        </Link>
      </div>

      <form className="middle-section" onSubmit={handleSearch}>
        <input 
          className="search-bar" 
          type="text" 
          placeholder="Search" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="search-button" type="submit">
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </form>

      <div className="right-section">
        <Link className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}
