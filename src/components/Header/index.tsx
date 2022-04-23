import React from "react";
import { Link, useLocation } from "react-router-dom";
import Banner from "../Banner";
import Login from "../Login";
import Navbar from "../Navbar";

const Header = () => {
  const { pathname } = useLocation();
  const [show, setShow] = React.useState<boolean>(false);
  const toggleModal = () => {
    setShow(!show);
  };
  const closeModal = () => {
    setShow(false);
  };
  return (
    <div id="header">
      <label
        className={show ? "overlay show" : "overlay"}
        onClick={closeModal}
      ></label>
      <div className="shopping-cart">
        <Link to="/cart">
          <img className="cart" src="/images/shopping-cart.png" alt="" />
        </Link>
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
              defaultValue=""
              placeholder="Bạn muốn tìm sách gì"
            />
          </div>
          <div className="cart-button tool-item">
            <Link to="/cart">
              <p>9</p>
              <img className="cart" src="/images/shopping-cart.png" alt="" />
            </Link>
          </div>
          <div className="profile-button tool-item">
            <img
              className="profile"
              src="/images/user.png"
              alt=""
              onClick={toggleModal}
            />
            <Login closeModal={closeModal} show={show} />
          </div>
        </div>
        <Navbar />
      </div>
      {pathname === "/" ? (
        <div className="header-bottom">
          <Banner />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
