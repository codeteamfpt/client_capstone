import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./common/layout/AdminLayout";
import EmptyLayout from "./common/layout/EmptyLayout";
import AccountManager from "./modules/admin/pages/account";
import AddAccount from "./modules/admin/pages/account/add-account";
import UpdateAccount from "./modules/admin/pages/account/update-account";
import BookManager from "./modules/admin/pages/book";
import AddBook from "./modules/admin/pages/book/add-book";
import UpdateBook from "./modules/admin/pages/book/update-book";
import CartManager from "./modules/admin/pages/cart";
import OrderManager from "./modules/admin/pages/order";
import BookInfo from "./modules/client/pages/book-info";
import Cart from "./modules/client/pages/cart";
import HomePage from "./modules/client/pages/home-page";
import PayInfo from "./modules/client/pages/pay-info";
import UserProfile from "./modules/client/pages/user-profile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmptyLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="pay-info" element={<PayInfo />} />
          <Route path="book-info/:bookId" element={<BookInfo />} />
        </Route>
        <Route path="/" element={<AdminLayout />}>
          <Route path="/admin" element={<BookManager />} />
          <Route path="/admin-account" element={<AccountManager />} />
          <Route path="/admin-account/add" element={<AddAccount />} />
          <Route
            path="/admin-account/update/:accountId"
            element={<UpdateAccount />}
          />
          <Route
            path="/admin-account/user-cart/:accountId"
            element={<CartManager />}
          />
          <Route path="/admin-book" element={<BookManager />} />
          <Route path="/admin-book/add" element={<AddBook />} />
          <Route path="/admin-book/update/:bookId" element={<UpdateBook />} />
          <Route path="/admin-order" element={<OrderManager />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
