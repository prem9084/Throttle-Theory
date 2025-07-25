
import './App.css'
import LoginPage from './Components/AuthPage/LoginPage';
import SignupPage from './Components/AuthPage/SignupPage';
import CartPage from './Components/CartPage';
import CategoryPage from './Components/CategoryPage';
import ForgotPasswordPage from './Components/ForgotPasswordPage';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import ProductPage from './Components/ProductPage';
import { useApp } from "./Context/AppContext"

function App() {
  const { currentPage } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'category':
        return <CategoryPage />;
      case 'cart':
        return <CartPage />;
      case 'login':
        return <LoginPage />;
      case 'signup':
        return <SignupPage />;
      case 'forgot-password':
        return <ForgotPasswordPage />;
      default:
        if (currentPage.startsWith('product-')) {
          const productId = currentPage.split('-')[1];
          return <ProductPage productId={productId} />;
        }
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      {renderPage()}
    </div>
  );
}

export default App
