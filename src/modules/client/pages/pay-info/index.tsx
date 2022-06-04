import { RollbackOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import useCreateCart from "../../../../common/hook/useCreateCart";
import useCreateOrder from "../../../../common/hook/useCreateOrder";
import useTotalPrice from "../../../../common/hook/useTotalPrice";
import { IOrder } from "../../../../common/type";
import { NotificationSuccess } from "../../../../components/Notification";
import { globalState } from "../../../../state/appState";

type Props = {};

const PayInfo = (props: Props) => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const { userInfo, totalBill, carts } = stateGlobal;
  const [form] = Form.useForm<IOrder>();
  const navigate = useNavigate();
  const { createCart } = useCreateCart();
  const { createOrder } = useCreateOrder();
  const { totalPrice } = useTotalPrice();

  // tính giá tiền mỗi lần cart thay đổi hoặc user khác đăng nhập
  React.useEffect(() => {
    totalPrice({ accountId: userInfo?.accountId });
    // và set vào form
    form.setFieldsValue({ ...form.getFieldsValue(), totalBill: totalBill });
  }, [carts, userInfo?.accountId]);

  // khi ấn nút đặt hàng thì gọi hàm này
  const onFinish = async (values: IOrder) => {
    // gọi vào hàm này để create orderhistory cho user hiện tại, truyền theo thông tin vừa nhập
    await createOrder({
      ...values,
      accountId: userInfo?.accountId || "",
      totalBill: totalBill || 0,
    });
    // reset lại cart cho user đó
    await createCart({ accountId: userInfo?.accountId });
    // quay lại màn hình trang chủ
    navigate("/");
    // reset thông tin giỏ hàng
    setStateGlobal({ ...stateGlobal, carts: undefined });
    NotificationSuccess("Thông báo", "Đặt hàng thành công");
  };
  return (
    <Row justify="center">
      <Col
        span={18}
        style={{ padding: 20, display: "flex", backgroundColor: "white" }}
      >
        <RollbackOutlined
          style={{ fontSize: 20, marginRight: 10, color: "#ffbe2d" }}
        />
        <Typography.Title level={5}>
          <Link to="/cart" style={{ color: "#ffbe2d" }}>
            Quay lại
          </Link>
        </Typography.Title>
      </Col>
      <Col span={18} style={{ backgroundColor: "white", padding: 20 }}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
          form={form}
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
                name="phoneNumber"
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
                name="location"
                labelCol={{ span: 6 }}
                rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item
                label="Tổng hóa đơn (VNĐ)"
                name="totalBill"
                labelCol={{ span: 6 }}
              >
                <Input disabled />
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
