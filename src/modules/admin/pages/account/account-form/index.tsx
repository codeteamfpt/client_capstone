import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import React from "react";
import { useRecoilState } from "recoil";
import { IAccount } from "../../../../../common/type";
import { globalState } from "../../../../../state/appState";

type Props = {
  typeForm?: string;
  onSave?: (values: IAccount) => void;
  title?: string;
};

const AccountForm = (props: Props) => {
  const [stateGlobal, _] = useRecoilState(globalState);
  const { account } = stateGlobal;
  const { onSave, typeForm, title } = props;
  const initialValues: IAccount = {
    // accountId: account?.accountId || "",
    userName: account?.userName || "",
    passWord: account?.passWord || "",
    role: 0,
    userImage: account?.userImage || "",
  };
  return (
    <Row
      justify="center"
      style={{ backgroundColor: "white", padding: 50, margin: 40 }}
    >
      <Col span={14} style={{ paddingBottom: 50 }}>
        <Typography.Title level={3}>{title}</Typography.Title>
      </Col>
      <Col span={20}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={initialValues}
          onFinish={onSave}
          autoComplete="off"
        >
          <Row>
            <Col span={12}>
              <Form.Item
                label="Hình ảnh"
                name="userImage"
                rules={[{ required: true, message: "Vui lòng nhập vào ảnh" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Form.Item name="accountId">
              <Input hidden />
            </Form.Item>
            <Col span={12}>
              <Row justify="center">
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
            <Col span={24}>
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
