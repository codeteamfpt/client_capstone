import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./common/layout/AdminLayout";
import EmptyLayout from "./common/layout/EmptyLayout";
import AccountManager from "./modules/admin/pages/account";
import BookManager from "./modules/admin/pages/book";
import CartManager from "./modules/admin/pages/cart";
import Cart from "./modules/client/pages/cart";
import HomePage from "./modules/client/pages/home-page";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmptyLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/" element={<AdminLayout />}>
          <Route path="/admin" element={<BookManager />} />
          <Route path="/admin-account" element={<AccountManager />} />
          <Route path="/admin-cart" element={<CartManager />} />
          <Route path="/admin-book" element={<BookManager />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
