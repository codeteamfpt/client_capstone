import { Col, Row, Form, Typography } from "antd";
import Input from "rc-input";
import React from "react";
import { useRecoilState } from "recoil";
import { globalState } from "../../../../state/appState";
import { RollbackOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

type Props = {};

const UserProfile = (props: Props) => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const { userInfo } = stateGlobal;
  const [form] = Form.useForm();
  React.useEffect(() => {
    if (userInfo) {
      form.setFieldsValue(userInfo);
    }
  }, [userInfo]);
  const onFinish = () => {};
  return (
    <div id="user-profile">
      <div className="profile-wrapper">
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
          <Col
            span={18}
            style={{
              paddingTop: 20,
              paddingLeft: 20,
              backgroundColor: "white",
            }}
          >
            <Typography.Title level={2}>Thông tin tài khoản</Typography.Title>
          </Col>
          <Col
            span={18}
            style={{ backgroundColor: "white", padding: "40px 30px" }}
          >
            <Form form={form} onFinish={onFinish} autoComplete="off">
              <Row>
                <Col span={12}>
                  <Row justify="center">
                    <Col span={16}>
                      <img
                        src="/images/mindmap-english-grammar.jpg"
                        alt=""
                        width={400}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={12}>
                  <Row justify="center">
                    <Col span={24}>
                      <Form.Item
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        label="Tên tài khoản"
                        name="userName"
                      >
                        <Input style={{ width: 350 }} disabled />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        label="Mật khẩu"
                        name="passWord"
                      >
                        <Input
                          type="password"
                          style={{ width: 350 }}
                          disabled
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserProfile;
