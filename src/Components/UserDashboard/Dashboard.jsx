import { useState } from 'react';
import './Dashboard.css'
function Dashboard() {
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    memberSince: '2023-05-15',
    totalOrders: 12,
    totalSpent: 1299.95,
    loyaltyPoints: 450
  });

  const [recentOrders] = useState([
    { 
      id: 'ORD-001', 
      date: '2025-01-15', 
      total: 299.99, 
      status: 'Delivered', 
      items: 3,
      trackingNumber: 'TRK123456789'
    },
    { 
      id: 'ORD-002', 
      date: '2025-01-10', 
      total: 159.50, 
      status: 'In Transit', 
      items: 2,
      trackingNumber: 'TRK987654321'
    },
    { 
      id: 'ORD-003', 
      date: '2025-01-05', 
      total: 89.99, 
      status: 'Processing', 
      items: 1,
      trackingNumber: null
    }
  ]);

  const [wishlistItems] = useState([
    { id: 1, name: 'Wireless Headphones', price: 199.99, inStock: true },
    { id: 2, name: 'Smart Watch', price: 299.99, inStock: false },
    { id: 3, name: 'Laptop Stand', price: 49.99, inStock: true }
  ]);

  const [addresses] = useState([
    {
      id: 1,
      type: 'Home',
      address: '123 Main St, City, State 12345',
      isDefault: true
    },
    {
      id: 2,
      type: 'Work',
      address: '456 Business Ave, City, State 67890',
      isDefault: false
    }
  ]);

  const [paymentMethods] = useState([
    {
      id: 1,
      type: 'Credit Card',
      last4: '4532',
      brand: 'Visa',
      isDefault: true
    },
    {
      id: 2,
      type: 'Credit Card',
      last4: '8901',
      brand: 'MasterCard',
      isDefault: false
    }
  ]);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'status-delivered';
      case 'in transit':
        return 'status-in-transit';
      case 'processing':
        return 'status-processing';
      default:
        return 'status-processing';
    }
  };

  return (
    <div className="customer-dashboard">
      <header>
        <h1>Welcome back, {user.name}!</h1>
        <p>Here's what's happening with your account</p>
      </header>

      {/* Account Overview */}
      <div className="dashboard-card">
        <h2>Account Overview</h2>
        <div className="overview-grid">
          <div className="stat-card">
            <h3>Total Orders</h3>
            <p>{user.totalOrders}</p>
          </div>
          <div className="stat-card">
            <h3>Total Spent</h3>
            <p>${user.totalSpent.toFixed(2)}</p>
          </div>
          <div className="stat-card">
            <h3>Loyalty Points</h3>
            <p>{user.loyaltyPoints} pts</p>
          </div>
          <div className="stat-card">
            <h3>Member Since</h3>
            <p>{new Date(user.memberSince).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="dashboard-card">
        <h2>Recent Orders</h2>
        <div className="orders-container">
          {recentOrders.map(order => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <h3>Order {order.id}</h3>
                <span className={`order-status ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
              </div>
              <div className="order-details">
                <p>Ordered on {new Date(order.date).toLocaleDateString()}</p>
                <p>{order.items} items • ${order.total}</p>
                {order.trackingNumber && (
                  <p>Tracking: {order.trackingNumber}</p>
                )}
              </div>
              <div className="order-actions">
                <button className="btn-primary" onClick={() => alert('View order details')}>
                  View Details
                </button>
                {order.trackingNumber && (
                  <button className="btn-secondary" onClick={() => alert('Track package')}>
                    Track Package
                  </button>
                )}
                {order.status === 'Delivered' && (
                  <button className="btn-secondary" onClick={() => alert('Leave review')}>
                    Leave Review
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="btn-primary btn-large btn-full-width" onClick={() => alert('View all orders')}>
          View All Orders
        </button>
      </div>

      {/* Quick Actions */}
      <div className="dashboard-card">
        <h2>Quick Actions</h2>
        <div className="quick-actions-grid">
          <button className="btn-primary" onClick={() => alert('Continue shopping')}>
            Continue Shopping
          </button>
          <button className="btn-primary" onClick={() => alert('Track all packages')}>
            Track Packages
          </button>
          <button className="btn-primary" onClick={() => alert('View wishlist')}>
            View Wishlist ({wishlistItems.length})
          </button>
          <button className="btn-primary" onClick={() => alert('Customer support')}>
            Customer Support
          </button>
          <button className="btn-primary" onClick={() => alert('Return/exchange')}>
            Returns & Exchanges
          </button>
          <button className="btn-primary" onClick={() => alert('Download invoices')}>
            Download Invoices
          </button>
        </div>
      </div>

      {/* Wishlist Preview */}
      <div className="dashboard-card">
        <h2>Wishlist ({wishlistItems.length} items)</h2>
        <div className="wishlist-grid">
          {wishlistItems.slice(0, 3).map(item => (
            <div key={item.id} className="wishlist-item">
              <h4>{item.name}</h4>
              <p>${item.price}</p>
              <p>{item.inStock ? 'In Stock' : 'Out of Stock'}</p>
              <div className="wishlist-actions">
                <button 
                  className="btn-primary"
                  onClick={() => alert('Add to cart')}
                  disabled={!item.inStock}
                >
                  Add to Cart
                </button>
                <button className="btn-secondary" onClick={() => alert('Remove from wishlist')}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-primary btn-large btn-full-width" onClick={() => alert('View full wishlist')}>
          View Full Wishlist
        </button>
      </div>

      {/* Account Settings Preview */}
      <div className="dashboard-card">
        <h2>Account Settings</h2>
        
        <div className="settings-section">
          <h3>Profile Information</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button className="btn-secondary" onClick={() => alert('Edit profile')}>
            Edit Profile
          </button>
        </div>

        <div className="settings-section">
          <h3>Shipping Addresses</h3>
          {addresses.map(address => (
            <div key={address.id} className="address-item">
              <h4>{address.type} {address.isDefault && '(Default)'}</h4>
              <p>{address.address}</p>
            </div>
          ))}
          <button className="btn-secondary" onClick={() => alert('Manage addresses')}>
            Manage Addresses
          </button>
        </div>

        <div className="settings-section">
          <h3>Payment Methods</h3>
          {paymentMethods.map(method => (
            <div key={method.id} className="payment-item">
              <h4>{method.brand} ending in {method.last4} {method.isDefault && '(Default)'}</h4>
            </div>
          ))}
          <button className="btn-secondary" onClick={() => alert('Manage payment methods')}>
            Manage Payment Methods
          </button>
        </div>
      </div>

      {/* Notifications/Updates */}
      <div className="dashboard-card">
        <h2>Notifications</h2>
        <div>
          <div className="notification-item">
            <p><strong>Order Update:</strong> Your order ORD-002 is out for delivery!</p>
            <small>2 hours ago</small>
          </div>
          <div className="notification-item">
            <p><strong>Sale Alert:</strong> Items in your wishlist are on sale - save up to 30%!</p>
            <small>1 day ago</small>
          </div>
          <div className="notification-item">
            <p><strong>Loyalty Reward:</strong> You've earned 50 bonus points! Redeem now.</p>
            <small>3 days ago</small>
          </div>
        </div>
        <button className="btn-primary btn-large btn-full-width" onClick={() => alert('View all notifications')}>
          View All Notifications
        </button>
      </div>
    </div>
  );
}

export default Dashboard;