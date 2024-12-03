import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
};

export default App;
