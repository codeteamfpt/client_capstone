import { Popconfirm, Typography } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import useCarts from "../../common/hook/useCart";
import { globalState } from "../../state/appState";
import Banner from "../Banner";
import Login from "../Login";
import Navbar from "../Navbar";
import { NotificationSuccess } from "../Notification";

const Header = () => {
  const { pathname } = useLocation();
  const [show, setShow] = React.useState<boolean>(false);
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const { userInfo, carts, cartNumber } = stateGlobal;
  const { getCartItems } = useCarts();

  React.useEffect(() => {
    if (cartNumber === 0) {
      getCartItems({ accountId: userInfo?.accountId });
    }
  }, [cartNumber]);
  const toggleModal = () => {
    setShow(!show);
  };
  const closeModal = () => {
    setShow(false);
  };
  const onLogout = () => {
    localStorage.removeItem("userInfo");
    setStateGlobal({
      ...stateGlobal,
      userInfo: undefined,
      carts: undefined,
      cartNumber: 0,
    });
    NotificationSuccess("Thông báo", "Bạn đã đăng xuất");
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
          <div className="user-name">
            <Link to="/user-profile">
              <span
                style={{
                  color: "white",
                  position: "relative",
                  right: 20,
                  top: 10,
                }}
              >
                Xin chào {userInfo?.userName}
              </span>
            </Link>
          </div>
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
              <p>{cartNumber}</p>
              <img className="cart" src="/images/shopping-cart.png" alt="" />
            </Link>
          </div>
          <div className="profile-button tool-item">
            {Object.keys(userInfo || {}).length === 0 ? (
              <>
                <img
                  className="profile"
                  src="/images/user.png"
                  alt=""
                  onClick={toggleModal}
                />
                <Login closeModal={closeModal} show={show} />
              </>
            ) : (
              <>
                <Popconfirm
                  title="Bạn có muốn đăng xuất không?"
                  onConfirm={onLogout}
                  onCancel={() => {}}
                  okText="Có"
                  cancelText="Không"
                  placement="bottom"
                >
                  <img
                    className="profile"
                    src="/images/logout.png"
                    alt=""
                    title="Đăng xuất"
                  />
                </Popconfirm>
              </>
            )}
          </div>
        </div>
        <Navbar userInfo={userInfo} />
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
