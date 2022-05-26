import { Button, Col, Form, Input, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IAccount } from "../../../../../common/type";
import { RollbackOutlined } from "@ant-design/icons";
type Props = {
  typeForm?: string;
  onSave?: (values: IAccount) => void;
  title?: string;
  item?: IAccount;
};

const AccountForm = (props: Props) => {
  const { onSave, typeForm, title, item } = props;
  const [form] = Form.useForm();
  const [userImage, setUserImage] = useState();
  const initialValues: IAccount = {
    accountId: item?.accountId || "",
    userName: item?.userName || "",
    passWord: item?.passWord || "",
    role: 0,
    userImage: item?.userImage || "",
  };

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [initialValues]);
  const onImageChange = () => {
    setUserImage(form.getFieldValue("userImage"));
  };
  React.useEffect(() => {
    form.setFieldsValue({ ...initialValues, userImage: userImage });
  }, [userImage]);
  return (
    <Row
      justify="center"
      style={{ backgroundColor: "white", padding: 50, margin: 40 }}
    >
      <Col span={18} style={{ padding: "20px 0 0 0px", display: "flex" }}>
        <RollbackOutlined style={{ fontSize: 20, marginRight: 10 }} />
        <Typography.Title level={5}>
          <Link to="/admin-account" style={{ color: "black" }}>
            Quay lại
          </Link>
        </Typography.Title>
      </Col>
      <Col span={18} style={{ paddingBottom: 50 }}>
        <Typography.Title level={3}>{title}</Typography.Title>
      </Col>
      <Col span={20}>
        <Form
          name="basic"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onSave}
          autoComplete="off"
        >
          <Row>
            <Col span={12}>
              <Row justify="center">
                <Col>
                  <img
                    style={{
                      objectFit: "cover",
                      width: 300,
                      height: 300,
                      border: "1px solid #ccc",
                      borderRadius: "50%",
                    }}
                    src={userImage || "/images/user2.png"}
                    alt="avatar"
                  />
                </Col>
              </Row>
            </Col>
            <Form.Item name="accountId">
              <Input hidden />
            </Form.Item>

            <Col span={12}>
              <Row justify="center" style={{ paddingTop: 60 }}>
                <Col span={24}>
                  <Form.Item
                    label="Hình ảnh"
                    name="userImage"
                    rules={[
                      { required: true, message: "Vui lòng nhập vào ảnh" },
                    ]}
                  >
                    <Input onChange={onImageChange} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Tên người dùng"
                    name="userName"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập vào tên người dùng",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Mật khẩu"
                    name="passWord"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập vào mật khẩu đăng nhập",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="role">
                    <Input hidden />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24} style={{ marginTop: 40 }}>
              <Row justify="center">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    {typeForm === "create" ? "Tạo người dùng" : "Chỉnh sửa"}
                  </Button>
                </Form.Item>
              </Row>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default AccountForm;
