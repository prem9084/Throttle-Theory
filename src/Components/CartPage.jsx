import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { useApp } from "../Context/AppContext";

const CartPage = () => {
  const { setCurrentPage, cartItems, updateQuantity, removeFromCart } = useApp();
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center text-gray-400 hover:text-white transition-colors mr-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Continue Shopping
          </button>
          <h1 className="text-3xl font-bold">Shopping Cart ({cartItems.length})</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8">Add some racing gear to get started!</p>
            <button 
              onClick={() => setCurrentPage('category')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Shop Now
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cartItems.map(item => (
                <div key={item.id} className="bg-gray-800 rounded-lg p-6 mb-4 flex items-center">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded mr-6" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-400 mb-2">{item.category}</p>
                    <p className="text-red-500 font-bold text-lg">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-700 hover:bg-gray-600 p-2 rounded"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-xl font-semibold w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-700 hover:bg-gray-600 p-2 rounded"
                    >
                      <Plus size={16} />
                    </button>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-600 hover:bg-red-700 p-2 rounded ml-4"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-lg p-6 sticky top-8">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} × {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 mb-6">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Subtotal:</span>
                    <span className="text-red-500">${subtotal.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-lg font-semibold transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage