
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import { Product } from '../types';

const Index = () => {
  const [currentView, setCurrentView] = useState<'hero' | 'categories' | 'products' | 'cart' | 'checkout'>('hero');
  const [selectedCategory, setSelectedCategory] = useState<'videos' | 'photos' | null>(null);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  const scrollToCategories = () => {
    setCurrentView('categories');
  };

  const selectCategory = (category: 'videos' | 'photos') => {
    setSelectedCategory(category);
    setCurrentView('products');
  };

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, { ...product, id: Date.now() }]);
    setShowCart(true);
    setTimeout(() => setShowCart(false), 3000);
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const goToCheckout = () => {
    setCurrentView('checkout');
  };

  const goBack = () => {
    if (currentView === 'products') {
      setCurrentView('categories');
    } else if (currentView === 'checkout') {
      setCurrentView('products');
    } else {
      setCurrentView('hero');
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1920&h=1080&fit=crop')`,
          filter: 'blur(8px) brightness(0.3)',
        }}
      />
      
      {/* Animated Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {currentView === 'hero' && <Hero onScrollToCategories={scrollToCategories} />}
        {currentView === 'categories' && (
          <CategorySection onSelectCategory={selectCategory} onGoBack={goBack} />
        )}
        {currentView === 'products' && selectedCategory && (
          <ProductGrid 
            category={selectedCategory} 
            onAddToCart={addToCart} 
            onGoBack={goBack}
            onGoToCart={() => setCurrentView('cart')}
            cartItemsCount={cartItems.length}
          />
        )}
        {currentView === 'cart' && (
          <Cart 
            items={cartItems} 
            onRemove={removeFromCart}
            onCheckout={goToCheckout}
            onGoBack={goBack}
          />
        )}
        {currentView === 'checkout' && (
          <Checkout 
            items={cartItems}
            onGoBack={goBack}
            onOrderComplete={() => {
              setCartItems([]);
              setCurrentView('hero');
            }}
          />
        )}
      </div>

      {/* Cart Notification */}
      {showCart && (
        <div className="fixed top-4 right-4 bg-pink-600 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in-right z-50">
          <p className="font-semibold">Added to cart!</p>
          <p className="text-sm opacity-90">{cartItems.length} items in cart</p>
        </div>
      )}
    </div>
  );
};

// Product Grid Component
const ProductGrid = ({ 
  category, 
  onAddToCart, 
  onGoBack, 
  onGoToCart, 
  cartItemsCount 
}: {
  category: 'videos' | 'photos';
  onAddToCart: (product: Product) => void;
  onGoBack: () => void;
  onGoToCart: () => void;
  cartItemsCount: number;
}) => {
  const products: Product[] = [
    { 
      name: `FREE ${category === 'videos' ? 'Video' : 'Photo'} Starter Pack`, 
      price: 0, 
      preview: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
      type: category 
    },
    { 
      name: `Premium ${category === 'videos' ? 'Video' : 'Photo'} Set 1`, 
      price: 29.99, 
      preview: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
      type: category 
    },
    { 
      name: `Exclusive ${category === 'videos' ? 'Video' : 'Photo'} Set 2`, 
      price: 39.99, 
      preview: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop',
      type: category 
    },
    { 
      name: `VIP ${category === 'videos' ? 'Video' : 'Photo'} Set 3`, 
      price: 49.99, 
      preview: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop',
      type: category 
    },
    { 
      name: `Deluxe ${category === 'videos' ? 'Video' : 'Photo'} Set 4`, 
      price: 59.99, 
      preview: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop',
      type: category 
    },
    { 
      name: `Ultimate ${category === 'videos' ? 'Video' : 'Photo'} Set 5`, 
      price: 69.99, 
      preview: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop',
      type: category 
    },
    { 
      name: `Platinum ${category === 'videos' ? 'Video' : 'Photo'} Set 6`, 
      price: 79.99, 
      preview: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop',
      type: category 
    },
  ];

  return (
    <div className="min-h-screen p-8 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onGoBack}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
        >
          ← Back
        </button>
        <h2 className="text-4xl font-bold text-white text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          {category === 'videos' ? 'Video' : 'Photo'} Collection
        </h2>
        <button
          onClick={onGoToCart}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 relative"
        >
          Cart ({cartItemsCount})
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              {cartItemsCount}
            </span>
          )}
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className={`group relative backdrop-blur-sm rounded-xl p-6 border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
              product.price === 0 
                ? 'bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/20 hover:border-green-400/40 hover:shadow-green-500/20' 
                : 'bg-gradient-to-br from-pink-900/20 to-purple-900/20 border-pink-500/20 hover:border-pink-400/40 hover:shadow-pink-500/20'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* FREE Badge */}
            {product.price === 0 && (
              <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                FREE
              </div>
            )}
            
            {/* Preview Image */}
            <div className="relative overflow-hidden rounded-lg mb-4">
              <div
                className="w-full h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${product.preview}')`,
                  filter: 'blur(12px) brightness(0.7)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">🔒</div>
                  <p className="text-sm font-semibold">Preview</p>
                </div>
              </div>
              <div className={`absolute top-2 right-2 text-white px-3 py-1 rounded-full text-sm font-semibold ${
                product.price === 0 ? 'bg-green-600' : 'bg-pink-600'
              }`}>
                {category === 'videos' ? 'VIDEO' : 'PHOTO'}
              </div>
            </div>

            {/* Product Info */}
            <h3 className={`text-xl font-semibold text-white mb-2 group-hover:transition-colors duration-300 ${
              product.price === 0 ? 'group-hover:text-green-300' : 'group-hover:text-pink-300'
            }`}>
              {product.name}
            </h3>
            {product.price === 0 ? (
              <div className="mb-4">
                <p className="text-3xl font-bold text-green-400 mb-2">FREE</p>
                <p className="text-sm text-green-200">Credit card required to prevent bots</p>
              </div>
            ) : (
              <p className="text-3xl font-bold text-pink-400 mb-4">€{product.price}</p>
            )}
            
            {/* Add to Cart Button */}
            <button
              onClick={() => onAddToCart(product)}
              className={`w-full text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                product.price === 0 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' 
                  : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700'
              }`}
            >
              {product.price === 0 ? 'Get Free Set' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
