import { ArrowLeft, Heart, Search, Star } from "lucide-react";
import { useApp } from "../Context/AppContext";

const ProductPage = ({ productId }) => {
  const { setCurrentPage, addToCart, searchQuery, setSearchQuery,mockProducts } = useApp();
  const product = mockProducts.find(p => p.id === parseInt(productId));
  
  if (!product) return <div>Product not found</div>;

  const filteredProducts = mockProducts.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => setCurrentPage('category')}
          className="flex items-center text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <img 
              src={product?.image} 
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className={i < Math.floor(product.rating) ? 'fill-current' : ''} />
                ))}
              </div>
              <span className="text-gray-400">({product.rating}) • 127 reviews</span>
            </div>
            <p className="text-3xl font-bold text-red-500 mb-6">${product.price}</p>
            <p className="text-gray-300 mb-8">
              Premium F1-inspired streetwear designed for racing enthusiasts. 
              Made with high-quality materials for comfort and durability.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => addToCart(product)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors flex-1"
              >
                Add to Cart
              </button>
              <button className="border border-gray-600 hover:border-white text-white px-6 py-3 rounded-lg transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <div className="max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
              />
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {searchQuery ? `Search Results (${filteredProducts.length})` : 'Related Products'}
          </h2>
          
          {filteredProducts.length === 0 && searchQuery ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-400">Try adjusting your search terms</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.slice(0, 6).map(p => (
                <div key={p.id} className="bg-gray-800 rounded-lg p-4">
                  <img src={p.image} alt={p.name} className="w-full h-32 object-cover rounded mb-3" />
                  <h3 className="font-semibold mb-1">{p.name}</h3>
                  <p className="text-red-500 font-bold">${p.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default ProductPage