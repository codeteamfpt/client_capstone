import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navigation">
      <ul className="nav-container">
        <li className="nav-item">
          <Link to="/">Trang chủ</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Về MC</Link>
        </li>
        <li className="nav-item">
          <Link to="/user-profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
