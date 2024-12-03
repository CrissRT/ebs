import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (_jsxs(Router, { children: [_jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsx(Header, { onToggleSidebar: toggleSidebar }), _jsxs("div", { className: "flex flex-1", children: [_jsx("div", { className: `fixed md:relative z-50 bg-white shadow-lg md:shadow-none md:w-64 h-full md:h-auto transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`, children: _jsx(Sidebar, {}) }), _jsx("main", { className: "flex-1 p-8", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/cart", element: _jsx(Cart, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) })] })] }), _jsx(Footer, {}), _jsx(ToastContainer, { position: "top-right", autoClose: 3000 })] }));
};
export default App;
