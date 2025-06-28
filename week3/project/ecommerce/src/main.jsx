import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Product from "./Product.jsx";
import Favorite from "./Favorite.jsx";
import FavoriteProvider from "./contexts/FavoriteContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {"Menu: "}
      <NavLink to="/">Products</NavLink>
      {" || "}
      <NavLink to="favorites">Favorites</NavLink>
      <FavoriteProvider>
        <Routes>
          <Route index element={<App />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="favorites" element={<Favorite />} />
        </Routes>
      </FavoriteProvider>
    </BrowserRouter>
  </StrictMode>
);
