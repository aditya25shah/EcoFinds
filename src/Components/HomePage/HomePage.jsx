import { useState } from 'react';

function Homepage() {
  const [activeSection, setActiveSection] = useState('home');
  const [cartItems, setCartItems] = useState(2);
  
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    avatar: '👤'
  });

  const [featuredProducts] = useState([
    { id: 1, name: 'Wireless Headphones', price: 199.99, image: '🎧', rating: 4.5 },
    { id: 2, name: 'Smart Watch', price: 299.99, image: '⌚', rating: 4.7 },
    { id: 3, name: 'Laptop Stand', price: 49.99, image: '💻', rating: 4.3 },
    { id: 4, name: 'Phone Case', price: 24.99, image: '📱', rating: 4.2 }
  ]);

  const addToCart = () => {
    setCartItems(prev => prev + 1);
    alert('Added to cart!');
  };

  const renderHome = () => (
    <div className="content-section">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to TechStore</h1>
        <p>Discover amazing products at great prices</p>
        <button className="cta-button">Shop Now</button>
      </div>

      {/* Featured Products */}
      <div className="section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.image}</div>
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
              <p className="rating">⭐ {product.rating}</p>
              <button className="add-to-cart-btn" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-icon">📱</div>
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <div className="category-icon">👕</div>
            <h3>Fashion</h3>
          </div>
          <div className="category-card">
            <div className="category-icon">🏠</div>
            <h3>Home & Garden</h3>
          </div>
          <div className="category-card">
            <div className="category-icon">📚</div>
            <h3>Books</h3>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="content-section">
      <div className="section">
        <h1>About TechStore</h1>
        <p>We are a leading e-commerce platform dedicated to bringing you the latest and greatest products at competitive prices.</p>
        
        <div className="about-grid">
          <div className="about-card">
            <h3>🚚 Fast Shipping</h3>
            <p>Free shipping on orders over $50. Most items delivered within 2-3 business days.</p>
          </div>
          <div className="about-card">
            <h3>🛡️ Secure Shopping</h3>
            <p>Your data is protected with industry-standard encryption and secure payment processing.</p>
          </div>
          <div className="about-card">
            <h3>🎯 Quality Products</h3>
            <p>We carefully curate our product selection to ensure you get the best value for your money.</p>
          </div>
          <div className="about-card">
            <h3>🎧 24/7 Support</h3>
            <p>Our customer service team is available around the clock to help with any questions.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCart = () => (
    <div className="content-section">
      <div className="section">
        <h1>Shopping Cart ({cartItems} items)</h1>
        {cartItems > 0 ? (
          <div>
            <div className="cart-item">
              <div className="item-info">
                <span className="item-icon">🎧</span>
                <div>
                  <h3>Wireless Headphones</h3>
                  <p>$199.99</p>
                </div>
              </div>
              <div className="item-actions">
                <button className="qty-btn">-</button>
                <span>1</span>
                <button className="qty-btn">+</button>
                <button className="remove-btn">Remove</button>
              </div>
            </div>
            
            {cartItems > 1 && (
              <div className="cart-item">
                <div className="item-info">
                  <span className="item-icon">⌚</span>
                  <div>
                    <h3>Smart Watch</h3>
                    <p>$299.99</p>
                  </div>
                </div>
                <div className="item-actions">
                  <button className="qty-btn">-</button>
                  <span>1</span>
                  <button className="qty-btn">+</button>
                  <button className="remove-btn">Remove</button>
                </div>
              </div>
            )}
            
            <div className="cart-summary">
              <h3>Total: ${cartItems === 1 ? '199.99' : '499.98'}</h3>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button onClick={() => setActiveSection('home')}>Continue Shopping</button>
          </div>
        )}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="content-section">
      <div className="section">
        <h1>My Profile</h1>
        <div className="profile-info">
          <div className="avatar">{user.avatar}</div>
          <div className="user-details">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button className="edit-profile-btn">Edit Profile</button>
          </div>
        </div>
        
        <div className="profile-sections">
          <div className="profile-section">
            <h3>Order History</h3>
            <p>View your past orders and track current ones</p>
            <button>View Orders</button>
          </div>
          <div className="profile-section">
            <h3>Wishlist</h3>
            <p>Items you've saved for later</p>
            <button>View Wishlist</button>
          </div>
          <div className="profile-section">
            <h3>Settings</h3>
            <p>Manage your account preferences</p>
            <button>Account Settings</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home': return renderHome();
      case 'about': return renderAbout();
      case 'cart': return renderCart();
      case 'profile': return renderProfile();
      default: return renderHome();
    }
  };

  return (
    <div className="homepage">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="nav-brand">
          <h2>🛍️ TechStore</h2>
        </div>
        <nav className="nav-links">
          <button 
            className={activeSection === 'home' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActiveSection('home')}
          >
            Home
          </button>
          <button 
            className={activeSection === 'about' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActiveSection('about')}
          >
            About
          </button>
          <button 
            className={activeSection === 'cart' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActiveSection('cart')}
          >
            Cart ({cartItems})
          </button>
          <button 
            className={activeSection === 'profile' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActiveSection('profile')}
          >
            Profile
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 TechStore. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .homepage {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .navbar {
          background: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-brand h2 {
          margin: 0;
          color: #333;
        }

        .nav-links {
          display: flex;
          gap: 1rem;
        }

        .nav-link {
          background: none;
          border: none;
          padding: 0.5rem 1rem;
          cursor: pointer;
          border-radius: 20px;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .nav-link:hover {
          background: #f0f0f0;
        }

        .nav-link.active {
          background: #667eea;
          color: white;
        }

        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .content-section {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .hero-section {
          text-align: center;
          padding: 3rem 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 15px;
          margin-bottom: 3rem;
        }

        .hero-section h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .hero-section p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .cta-button {
          background: white;
          color: #667eea;
          border: none;
          padding: 1rem 2rem;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .section {
          margin-bottom: 3rem;
        }

        .section h2 {
          color: #333;
          margin-bottom: 2rem;
          text-align: center;
        }

        .products-grid, .categories-grid, .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .product-card, .category-card, .about-card {
          background: white;
          border: 2px solid #f0f0f0;
          border-radius: 15px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .product-card:hover, .category-card:hover, .about-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          border-color: #667eea;
        }

        .product-image, .category-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .price {
          font-size: 1.5rem;
          font-weight: bold;
          color: #667eea;
        }

        .rating {
          color: #888;
          margin-bottom: 1rem;
        }

        .add-to-cart-btn {
          background: #667eea;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .add-to-cart-btn:hover {
          background: #5a67d8;
        }

        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border: 1px solid #eee;
          border-radius: 10px;
          margin-bottom: 1rem;
        }

        .item-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .item-icon {
          font-size: 2rem;
        }

        .item-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .qty-btn, .remove-btn {
          background: #f0f0f0;
          border: none;
          padding: 0.25rem 0.5rem;
          border-radius: 5px;
          cursor: pointer;
        }

        .remove-btn {
          background: #ff6b6b;
          color: white;
        }

        .cart-summary {
          text-align: center;
          padding: 2rem;
          background: #f9f9f9;
          border-radius: 10px;
          margin-top: 2rem;
        }

        .checkout-btn {
          background: #28a745;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 25px;
          font-size: 1.1rem;
          cursor: pointer;
          margin-top: 1rem;
        }

        .empty-cart {
          text-align: center;
          padding: 3rem;
        }

        .profile-info {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .avatar {
          font-size: 4rem;
          background: #f0f0f0;
          border-radius: 50%;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .edit-profile-btn {
          background: #667eea;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          cursor: pointer;
          margin-top: 1rem;
        }

        .profile-sections {
          display: grid;
          gap: 1rem;
        }

        .profile-section {
          padding: 1.5rem;
          border: 1px solid #eee;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .profile-section button {
          background: #667eea;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          cursor: pointer;
        }

        .footer {
          background: #333;
          color: white;
          text-align: center;
          padding: 2rem;
          margin-top: 3rem;
        }

        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            gap: 1rem;
          }

          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
          }

          .hero-section h1 {
            font-size: 2rem;
          }

          .main-content {
            padding: 1rem;
          }

          .profile-info {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

export default Homepage;