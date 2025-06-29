import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import "./index.css";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Favorite from "./pages/Favorite.jsx";
import FavoriteProvider from "./contexts/FavoriteContext.jsx";
import AppStatusProvider from "./contexts/AppStatusContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <header className="header">
        <div className="website-title">
          <NavLink to="/">🛒 E-Commerce</NavLink>
        </div>
        <nav className="nav-bar">
          <NavLink to="/" className="nav-link">
            Products
          </NavLink>
          <NavLink to="/favorites" className="nav-link">
            Favorites
          </NavLink>
        </nav>
      </header>
      <div className="app-body">
        <AppStatusProvider>
          <FavoriteProvider>
            <Routes path="pages">
              <Route index element={<Home />} />
              <Route path="product/:id" element={<Product />} />
              <Route path="favorites" element={<Favorite />} />
            </Routes>
          </FavoriteProvider>
        </AppStatusProvider>
      </div>
    </BrowserRouter>
  </StrictMode>
);
