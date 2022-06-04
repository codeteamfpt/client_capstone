import { Form, Input } from "antd";
import React from "react";
import useLogin from "../../common/hook/useLogin";
import useRegister from "../../common/hook/useRegister";
import { IAccount } from "../../common/type";
type Props = {
  closeModal: () => void;
  show: boolean;
};

const Login = (props: Props) => {
  const [loginForm] = Form.useForm();
  const [registerForm] = Form.useForm();
  const { login } = useLogin();
  const { register } = useRegister();
  const { closeModal, show } = props;

  // sau khi ấn submit form login thì gọi hàm onLogin để đăng nhập
  const onLogin = async (values: IAccount) => {
    // gọi hàm login từ custom hook, truyền vào thông tin đăng nhập
    const user = await login(values?.userName || "", values?.passWord || "");
    // nếu trả về 1 user thì load lại trang và cho user đăng nhập
    if (user) {
      window.location.reload();
    }
  };

  // sau khi ấn submit form register thì gọi hàm onRegister để đăng nhập
  const onRegister = async (values: IAccount) => {
    // gọi hàm register từ custom hook, truyền vào thông tin đăng kí
    const res = await register({
      userName: values?.userName || "",
      passWord: values?.passWord || "",
      role: 0,
      userImage: "none",
    });
    // nếu đăng kí xong trả về thông tin user thì đóng cửa sổ đăng nhập đăng kí lại
    if (res) {
      closeModal();
    }
  };

  return (
    <div id="login-modal" className={show ? "show" : ""}>
      <div className="wrap">
        <div className="close" onClick={closeModal}>
          <img src="/images/close.png" alt="" />
        </div>
        <div className="login-left">
          <Form
            form={loginForm}
            name="basic1"
            initialValues={{ remember: true }}
            onFinish={onLogin}
            autoComplete="off"
          >
            <div className="wrap-form">
              <h1 className="title">Đăng nhập</h1>
              <div>
                <Form.Item
                  label="Tên tài khoản hoặc địa chỉ email *"
                  name="userName"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tên đăng nhập hoặc email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  label="Mật khẩu"
                  name="passWord"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mật khẩu",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </div>
              <button className="submit-button">Đăng nhập</button>
            </div>
          </Form>
        </div>
        <div className="register-right">
          <Form
            form={registerForm}
            name="basic2"
            initialValues={{ remember: true }}
            onFinish={onRegister}
            autoComplete="off"
          >
            <div className="wrap-form">
              <h1 className="title">Đăng kí</h1>
              <div>
                <Form.Item
                  label="Tên tài khoản hoặc địa chỉ email *"
                  name="userName"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tên đăng nhập hoặc email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  label="Mật khẩu"
                  name="passWord"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mật khẩu",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </div>
              <button className="submit-button">Đăng kí</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
