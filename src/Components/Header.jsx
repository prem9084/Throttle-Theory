import { useState } from "react";
import { useApp } from "../Context/AppContext";
import { Menu, ShoppingCart, User } from "lucide-react";

const Header = () => {
  const { currentPage, setCurrentPage, cartItems, user } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent"
            onClick={() => setCurrentPage('home')}
          >
            APEX RACING
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`hover:text-red-500 transition-colors ${currentPage === 'home' ? 'text-red-500' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('category')}
              className={`hover:text-red-500 transition-colors ${currentPage === 'category' ? 'text-red-500' : ''}`}
            >
              Products
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setCurrentPage('cart')}
              className="relative hover:text-red-500 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button 
              onClick={() => setCurrentPage(user ? 'profile' : 'login')}
              className="hover:text-red-500 transition-colors"
            >
              <User size={24} />
            </button>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                className="text-left hover:text-red-500 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => { setCurrentPage('category'); setMobileMenuOpen(false); }}
                className="text-left hover:text-red-500 transition-colors"
              >
                Products
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header