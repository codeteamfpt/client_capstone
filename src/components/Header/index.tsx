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
  const { userInfo, carts } = stateGlobal;
  const { getCartItems } = useCarts();

  // nếu chưa có thông tin của giỏ hàng thì gọi hàm lấy thông tin giỏ hàng
  React.useEffect(() => {
    if (!carts) {
      getCartItems({ accountId: userInfo?.accountId });
    }
    // khi user thay đổi thì cart được cập nhật lại
  }, [userInfo?.accountId]);

  // ấn nút bật mở modal sẽ gọi hàm này
  const toggleModal = () => {
    setShow(!show);
  };

  //ấn nút đóng modal sẽ gọi hàm này
  const closeModal = () => {
    setShow(false);
  };

  // khi ấn vào nút logout thì gọi hàm này
  const onLogout = () => {
    // xóa user info ở trong bộ nhớ của browser
    localStorage.removeItem("userInfo");
    // xóa hết thông tin user ở state
    setStateGlobal({
      ...stateGlobal,
      userInfo: undefined,
      carts: undefined,
      totalBill: 0,
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
          <div className="logo">
            <a href="#header">
              <img
                src="/images/books-stack-of-three.png"
                alt=""
                style={{ width: 40, marginRight: "360px" }}
              />
            </a>
          </div>
          <div className="user-name">
            {/* nếu có thông tin của user thì sẽ hiển thị dòng chữ kèm link để chuyển vào trang userprofile */}
            {userInfo && (
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
            )}
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
              <p>{carts?.length || 0}</p>
              <img className="cart" src="/images/shopping-cart.png" alt="" />
            </Link>
          </div>
          <div className="profile-button tool-item">
            {/* Nếu k có user thì show hiển thị icon user để ấn show lên màn đăng nhập */}
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
              // nếu đã có user đăng nhập thì hiển thị icon đăng xuất để đăng xuất
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
