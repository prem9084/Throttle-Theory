import { createContext, useContext, useState } from "react";

const AppContext = createContext();


  const mockProducts = [
  { id: 1, name: 'Racing Stripe Tee', price: 45, category: 'Tees', image: 'https://media.gettyimages.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=gi&k=20&c=KiBIOouPYE8XU7Ph8E7qNnMY1K1pebL3p2fkyfAH3Vg=', rating: 4.5 },
  { id: 2, name: 'Monaco GP Tee', price: 50, category: 'Tees', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZF2WTxSvsF-MJ2fFqpEUVoX03b4D6iK-uiQ&s', rating: 4.8 },
  { id: 3, name: 'Speed Demon Tee', price: 48, category: 'Tees', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWlD0ihWt7wuX-7EkXcILFZpg-bCAm7xKZDQ&s', rating: 4.3 },
  { id: 4, name: 'Podium Victory Tee', price: 52, category: 'Tees', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPPeNcRWPOX7ulVYg14imKnSv0hp4dIi4Cg&s', rating: 4.7 },
  { id: 5, name: 'Chequered Flag Tee', price: 46, category: 'Tees', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzGP-V4sMBsdgpoLnzFH-oiGZlOx0iNR-Jg&s', rating: 4.4 },
  { id: 6, name: 'Circuit Master Tee', price: 49, category: 'Tees', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-PV2-2edcDX-iShbXGLYn79T2FCge7tc-Q&s', rating: 4.6 }
];


const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');



  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? {...item, quantity: item.quantity + 1} : item
        );
      }
      return [...prev, {...product, quantity: 1}];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => prev.map(item => 
        item.id === id ? {...item, quantity} : item
      ));
    }
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const value = {
    currentPage, setCurrentPage,
    cartItems, addToCart, updateQuantity, removeFromCart,
    user, setUser,
    searchQuery, setSearchQuery,
    mockProducts
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useApp = () => useContext(AppContext);

export  {useApp, AppProvider}