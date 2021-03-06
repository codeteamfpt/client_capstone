import React from "react";
import { Link } from "react-router-dom";
import { IAccount } from "../../common/type";

interface IProps {
  userInfo?: IAccount;
}
const Navbar = ({ userInfo }: IProps) => {
  return (
    <div id="navigation">
      <ul className="nav-container">
        <li className="nav-item">
          <Link to="/">Trang chủ</Link>
        </li>
        {/* nếu user là admin thì show nút quản trị viên riêng cho admin */}
        {userInfo?.role === 1 && (
          <li className="nav-item">
            <Link to="/admin">Quản trị viên</Link>
          </li>
        )}
        {/* kiểm tra user đã đăng nhập chưa để show ra các option riêng khi đăng nhập */}
        {(userInfo?.role === 0 || userInfo?.role === 1) && (
          <>
            <li className="nav-item">
              <Link to="/user-profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link to="/order-history">Xem đơn hàng</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
