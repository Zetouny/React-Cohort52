import { Routes, Route } from "react-router";
import AppStatusProvider from "./contexts/AppStatusContext";
import FavoriteProvider from "./contexts/FavoriteContext";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Favorite from "./pages/Favorite.jsx";

export default function App() {
  return (
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
  );
}
