import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmptyLayout from "./common/layout/EmptyLayout";
import Cart from "./modules/Home/pages/cart";
import HomePage from "./modules/Home/pages/home-page";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmptyLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
