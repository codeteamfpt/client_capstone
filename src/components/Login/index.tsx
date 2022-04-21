import React from "react";

type Props = {
  closeModal: () => void;
  show: boolean;
};

const Login = (props: Props) => {
  const { closeModal, show } = props;
  return (
    <div id="login-modal" className={show ? "show" : ""}>
      <div className="wrap">
        <div className="close" onClick={closeModal}>
          <img src="/images/close.png" alt="" />
        </div>
        <div className="login-left">
          <div className="wrap-form">
            <h1 className="title">Đăng nhập</h1>
            <div>
              <label>Tên tài khoản hoặc địa chỉ email *</label>
              <input type="text" />
            </div>
            <div>
              <label>Mật khẩu</label>
              <input type="text" />
            </div>
            <button className="submit-button">Đăng nhập</button>
          </div>
        </div>
        <div className="register-right">
          <div className="wrap-form">
            <h1 className="title">Đăng kí</h1>
            <div>
              <label>Tên tài khoản hoặc địa chỉ email *</label>
              <input type="text" />
            </div>
            <div>
              <label>Mật khẩu</label>
              <input type="text" />
            </div>
            <button className="submit-button">Đăng kí</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
