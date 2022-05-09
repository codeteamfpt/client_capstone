import { Button, Col, Form, Input, Row, Typography } from "antd";
import React from "react";
import { NotificationSuccess } from "../../../../components/Notification";
import { RollbackOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import useCreateCart from "../../../../common/hook/useCreateCart";
import { useRecoilState } from "recoil";
import { globalState } from "../../../../state/appState";

type Props = {};

const PayInfo = (props: Props) => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const { userInfo } = stateGlobal;
  const navigate = useNavigate();
  const { createCart } = useCreateCart();
  const onFinish = async () => {
    await createCart({ accountId: userInfo?.accountId });
    navigate("/");
    setStateGlobal({ ...stateGlobal, carts: undefined, cartNumber: 0 });
    NotificationSuccess("Thông báo", "Đặt hàng thành công");
  };
  return (
    <Row justify="center" style={{ padding: 30 }}>
      <Col span={18} style={{ paddingBottom: 10, display: "flex" }}>
        <RollbackOutlined
          style={{ fontSize: 20, marginRight: 10, color: "#ffbe2d" }}
        />
        <Typography.Title level={5}>
          <Link to="/cart" style={{ color: "#ffbe2d" }}>
            Quay lại
          </Link>
        </Typography.Title>
      </Col>
      <Col span={18}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <Typography.Title level={3}>Thông tin thanh toán</Typography.Title>
          <Row justify="center" style={{ padding: 20 }}>
            <Col span={16}>
              <Form.Item
                label="Họ Tên"
                name="name"
                labelCol={{ span: 6 }}
                rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item
                label="Email"
                name="email"
                labelCol={{ span: 6 }}
                rules={[
                  { required: true, message: "Vui lòng nhập địa chỉ email" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item
                label="Số điện thoại"
                name="phone"
                labelCol={{ span: 6 }}
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item
                label="Địa chỉ"
                name="address"
                labelCol={{ span: 6 }}
                rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Row justify="center">
                <Col>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{
                      marginLeft: 100,
                      backgroundColor: "#ffbe2d",
                      border: "none",
                    }}
                  >
                    Đặt hàng
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default PayInfo;
