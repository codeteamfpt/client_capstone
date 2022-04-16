import React from "react";
import Banner from "../Banner";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <div id="header">
      <div className="shopping-cart">
        <img src="/images/shopping-cart.png" alt="" />
      </div>
      <div className="header-top">
        <div className="tool">
          <div className="search tool-item">
            <div className="search-icon">
              <img src="/images/search.png" alt="" />
            </div>
            <input
              type="text"
              name="search"
              id=""
              placeholder="Bạn muốn tìm sách gì"
            />
          </div>
          <div className="cart-button tool-item">
            <img src="/images/shopping-cart.png" alt="" />
          </div>
          <div className="profile-button tool-item">
            <img src="/images/user.png" alt="" />
          </div>
        </div>
        <Navbar />
      </div>
      <div className="header-bottom">
        <Banner />
      </div>
    </div>
  );
};

export default Header;
