import { useApp } from "../Context/AppContext";

const HomePage = () => {
  const { setCurrentPage } = useApp();




const categories = ['Tees', 'Jackets', 'Caps', 'Accessories', 'Limited'];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 bg-clip-text text-transparent animate-pulse">
            FUEL YOUR PASSION
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Premium F1-inspired streetwear for racing enthusiasts
          </p>
          <button 
            onClick={() => setCurrentPage('category')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            SHOP BY CATEGORY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div 
                key={category}
                onClick={() => index === 0 ? setCurrentPage('category') : null}
                className={`bg-gray-700 rounded-lg p-8 text-center transition-all duration-300 ${
                  index === 0 ? 'cursor-pointer hover:bg-red-600 hover:scale-105' : 'cursor-default opacity-75'
                } shadow-lg hover:shadow-xl`}
              >
                <div className="text-4xl mb-4">
                  {index === 0 ? '👕' : index === 1 ? '🧥' : index === 2 ? '🧢' : index === 3 ? '⌚' : '⭐'}
                </div>
                <h3 className="text-xl font-semibold text-white">{category}</h3>
                {index === 0 && <p className="text-sm text-gray-300 mt-2">Click to explore</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-red-500 text-4xl mb-4">🏎️</div>
              <h3 className="text-xl font-semibold mb-2">Race-Inspired Design</h3>
              <p className="text-gray-400">Authentic F1 aesthetics meet street fashion</p>
            </div>
            <div className="text-center">
              <div className="text-red-500 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-400">Built to last like championship-winning cars</p>
            </div>
            <div className="text-center">
              <div className="text-red-500 text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Limited Editions</h3>
              <p className="text-gray-400">Exclusive designs for true racing fans</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage