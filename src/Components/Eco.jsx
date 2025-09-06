import React, { useState } from 'react';
import { ShoppingCart, Plus, User, Home, Package, Heart, Star, ArrowLeft, Edit, Trash2, Eye, Mail, Lock } from 'lucide-react';

// 1. Login/Signup Component
const LoginSignup = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      id: 1,
      name: formData.name || 'John Doe',
      email: formData.email
    };
    onLogin(userData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 backdrop-blur-sm bg-opacity-95">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShoppingCart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-600">
            {isLogin ? 'Sign in to your account' : 'Join our marketplace today'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
          )}
          
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          {!isLogin && (
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-purple-600 font-semibold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

// 2. Product Feed Component
const ProductFeed = ({ products, onProductClick, onAddToCart, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">ShopHub</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onNavigate('addProduct')}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product</span>
              </button>
              <button
                onClick={() => onNavigate('dashboard')}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => onProductClick(product)}
                />
                <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 cursor-pointer hover:text-purple-600 transition-colors" onClick={() => onProductClick(product)}>
                  {product.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. Add Product Component
const AddProduct = ({ onAddProduct, onBack }) => {
  const [productData, setProductData] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
    image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      ...productData,
      price: parseFloat(productData.price),
      rating: 0,
      reviews: 0,
      image: productData.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='100' y='100' text-anchor='middle' dy='.3em' fill='%236b7280'%3ENo Image%3C/text%3E%3C/svg%3E"
    };
    onAddProduct(newProduct);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-8">
            <button
              onClick={onBack}
              className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Title
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                value={productData.title}
                onChange={(e) => setProductData({...productData, title: e.target.value})}
                placeholder="Enter product title"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  value={productData.price}
                  onChange={(e) => setProductData({...productData, price: e.target.value})}
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  value={productData.category}
                  onChange={(e) => setProductData({...productData, category: e.target.value})}
                >
                  <option value="">Select category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Home">Home & Garden</option>
                  <option value="Sports">Sports</option>
                  <option value="Books">Books</option>
                  <option value="Wearables">Wearables</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Description
              </label>
              <textarea
                rows="4"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                value={productData.description}
                onChange={(e) => setProductData({...productData, description: e.target.value})}
                placeholder="Describe your product..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL (Optional)
              </label>
              <input
                type="url"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                value={productData.image}
                onChange={(e) => setProductData({...productData, image: e.target.value})}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={onBack}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// 4. Product Details Component
const ProductDetails = ({ product, onBack, onAddToCart }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </button>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Heart className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="text-4xl font-bold text-gray-900 mb-6">
                  ${product.price}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center space-x-4 mb-6">
                  <label className="font-medium text-gray-900">Quantity:</label>
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-l border-r">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => onAddToCart(product, quantity)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                  
                  <button className="px-6 py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 5. Dashboard Component
const Dashboard = ({ user, purchases, products, onNavigate, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const myProducts = products.filter(p => p.sellerId === user?.id);
  const totalRevenue = purchases.reduce((sum, purchase) => sum + purchase.total, 0);
  const totalOrders = purchases.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onNavigate('feed')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            </div>
            
            <button
              onClick={onLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* User Profile Card */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white p-8 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h2>
              <p className="text-white/80">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Total Revenue</h3>
              <Package className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">${totalRevenue.toFixed(2)}</div>
            <p className="text-sm text-gray-600">From {totalOrders} orders</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Products Listed</h3>
              <Plus className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{myProducts.length}</div>
            <p className="text-sm text-gray-600">Active listings</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Total Orders</h3>
              <ShoppingCart className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{totalOrders}</div>
            <p className="text-sm text-gray-600">Completed purchases</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'purchases', label: 'Purchase History' },
                { id: 'products', label: 'My Products' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {purchases.slice(0, 3).map(purchase => (
                    <div key={purchase.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Order #{purchase.id}</p>
                        <p className="text-sm text-gray-600">{purchase.date}</p>
                      </div>
                      <span className="font-semibold text-green-600">${purchase.total}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'purchases' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Purchase History</h3>
                <div className="space-y-4">
                  {purchases.map(purchase => (
                    <div key={purchase.id} className="border rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold">Order #{purchase.id}</h4>
                          <p className="text-sm text-gray-600">{purchase.date}</p>
                        </div>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          Delivered
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        {purchase.items.map(item => (
                          <div key={item.id} className="flex items-center space-x-4">
                            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                            <div className="flex-1">
                              <h5 className="font-medium">{item.title}</h5>
                              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                            </div>
                            <span className="font-semibold">${item.price}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t pt-4 mt-4">
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>${purchase.total}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">My Products</h3>
                  <button
                    onClick={() => onNavigate('addProduct')}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Product</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {myProducts.length === 0 ? (
                    <div className="col-span-full text-center py-8">
                      <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No products listed yet</p>
                      <button
                        onClick={() => onNavigate('addProduct')}
                        className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        Add Your First Product
                      </button>
                    </div>
                  ) : (
                    myProducts.map(product => (
                      <div key={product.id} className="bg-gray-50 rounded-lg p-4">
                        <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded-lg mb-3" />
                        <h4 className="font-semibold mb-2">{product.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">${product.price}</p>
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>View</span>
                          </button>
                          <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-1">
                            <Edit className="w-4 h-4" />
                            <span>Edit</span>
                          </button>
                          <button className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component that demonstrates all components
const EcommerceApp = () => {
  const [currentView, setCurrentView] = useState('login');
  const [user, setUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: 299.99,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Cpath d='M60 80h80v40H60z' fill='%236366f1'/%3E%3Ccircle cx='70' cy='100' r='20' fill='%234f46e5'/%3E%3Ccircle cx='130' cy='100' r='20' fill='%234f46e5'/%3E%3C/svg%3E",
      category: "Electronics",
      rating: 4.8,
      reviews: 124,
      description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
      sellerId: 1
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      price: 199.99,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Crect x='70' y='60' width='60' height='80' rx='15' fill='%2310b981'/%3E%3Crect x='75' y='65' width='50' height='30' fill='%23065f46'/%3E%3C/svg%3E",
      category: "Wearables",
      rating: 4.6,
      reviews: 89,
      description: "Advanced fitness tracking with heart rate monitoring and GPS.",
      sellerId: 2
    },
    {
      id: 3,
      title: "Leather Laptop Bag",
      price: 89.99,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Crect x='50' y='70' width='100' height='60' rx='5' fill='%236b4423'/%3E%3Crect x='55' y='75' width='90' height='10' fill='%23543016'/%3E%3C/svg%3E",
      category: "Accessories",
      rating: 4.7,
      reviews: 56,
      description: "Premium leather laptop bag with multiple compartments.",
      sellerId: 1
    }
  ]);

  const [cart, setCart] = useState([]);
  
  const [purchases] = useState([
    {
      id: 1001,
      date: "2025-01-15",
      total: 299.99,
      items: [
        {
          id: 1,
          title: "Premium Wireless Headphones",
          price: 299.99,
          quantity: 1,
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Cpath d='M60 80h80v40H60z' fill='%236366f1'/%3E%3Ccircle cx='70' cy='100' r='20' fill='%234f46e5'/%3E%3Ccircle cx='130' cy='100' r='20' fill='%234f46e5'/%3E%3C/svg%3E"
        }
      ]
    },
    {
      id: 1002,
      date: "2025-01-10",
      total: 289.98,
      items: [
        {
          id: 2,
          title: "Smart Fitness Watch",
          price: 199.99,
          quantity: 1,
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Crect x='70' y='60' width='60' height='80' rx='15' fill='%2310b981'/%3E%3Crect x='75' y='65' width='50' height='30' fill='%23065f46'/%3E%3C/svg%3E"
        },
        {
          id: 3,
          title: "Leather Laptop Bag",
          price: 89.99,
          quantity: 1,
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Crect x='50' y='70' width='100' height='60' rx='5' fill='%236b4423'/%3E%3Crect x='55' y='75' width='90' height='10' fill='%23543016'/%3E%3C/svg%3E"
        }
      ]
    }
  ]);

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentView('feed');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('login');
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, sellerId: user?.id }]);
    setCurrentView('feed');
  };

  const handleAddToCart = (product, quantity = 1) => {
    setCart([...cart, { ...product, quantity }]);
    // You could add a toast notification here
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('productDetails');
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  const handleBack = () => {
    if (currentView === 'productDetails') {
      setCurrentView('feed');
    } else if (currentView === 'addProduct') {
      setCurrentView('feed');
    } else if (currentView === 'dashboard') {
      setCurrentView('feed');
    }
  };

  // Render current view
  const renderCurrentView = () => {
    switch (currentView) {
      case 'login':
        return <LoginSignup onLogin={handleLogin} />;
      
      case 'feed':
        return (
          <ProductFeed
            products={products}
            onProductClick={handleProductClick}
            onAddToCart={handleAddToCart}
            onNavigate={handleNavigate}
          />
        );
      
      case 'addProduct':
        return (
          <AddProduct
            onAddProduct={handleAddProduct}
            onBack={handleBack}
          />
        );
      
      case 'productDetails':
        return (
          <ProductDetails
            product={selectedProduct}
            onBack={handleBack}
            onAddToCart={handleAddToCart}
          />
        );
      
      case 'dashboard':
        return (
          <Dashboard
            user={user}
            purchases={purchases}
            products={products}
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        );
      
      default:
        return <ProductFeed products={products} onProductClick={handleProductClick} onAddToCart={handleAddToCart} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="font-sans">
      {renderCurrentView()}
    </div>
  );
};

export default EcommerceApp;