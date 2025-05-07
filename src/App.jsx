import React from "react";
import "./App.css"; // Importing CSS for styling

const products = [
  { id: 1, name: "Dark Roast Coffee", price: "$14.99", image: "https://wp.solsticemedia.com.au/wp-content/uploads/2024/12/twe-coffee-stock-image-jonas-jacobsson.jpg?w=1024" },
  { id: 2, name: "Espresso Beans", price: "$18.99", image: "https://parachutecoffee.com/cdn/shop/articles/Untitled_design_11_800x.png?v=1670859015" },
  { id: 3, name: "French Press", price: "$29.99", image: "https://t4.ftcdn.net/jpg/07/20/04/61/360_F_720046156_tQGGKGPYagv8dkpSTz1HW2kGpKtu4sCo.jpg" },
];

export default function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">☕ Coffee Shop</div>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        
        {/* Product Grid */}
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Coffee Shop. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
