import {
  BookOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Col, Layout, Menu, Popconfirm, Row, Typography } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { globalState } from "../../state/appState";
import { NotificationSuccess } from "../Notification";
const { Header, Content, Footer, Sider } = Layout;
type Props = {};

const SideBar = (props: Props) => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const { carts, userInfo } = stateGlobal;
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  const onLogout = () => {
    localStorage.removeItem("userInfo");
    setStateGlobal({
      ...stateGlobal,
      userInfo: undefined,
      carts: undefined,
      totalBill: 0,
    });
    NotificationSuccess("Thông báo", "Bạn đã đăng xuất");
    navigate("/");
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{ paddingTop: "64px" }}
      >
        <Menu theme="dark" defaultSelectedKeys={["-1"]} mode="inline">
          <Menu.Item
            key="-1"
            icon={<SettingOutlined />}
            style={{ marginTop: 0, backgroundColor: "#1890ff", color: "white" }}
          >
            <Link to="/admin" style={{ color: "white" }}>
              Quản trị viên
            </Link>
          </Menu.Item>
          <Menu.Item key="1" icon={<BookOutlined />} style={{ marginTop: 0 }}>
            <Link to="/admin-book">Quản lí sách</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />} style={{ marginTop: 0 }}>
            <Link to="/admin-account">Quản lí tài khoản</Link>
          </Menu.Item>
          {/* <Menu.Item
            key="3"
            icon={<ShoppingCartOutlined />}
            style={{ marginTop: 0 }}
          >
            <Link to="/admin-order">Quản lí đơn hàng</Link>
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, position: "relative" }}
        >
          <Row justify="end" align="middle">
            <Col span={17}>
              <Link to="/" style={{ color: "white" }}>
                <HomeOutlined
                  style={{
                    position: "relative",
                    marginRight: 10,
                    top: -3,
                  }}
                />
                Về trang chủ
              </Link>
            </Col>
            <Col span={5}>
              <Typography.Title
                level={5}
                style={{ color: "white", marginBottom: 0 }}
              >
                Xin chào {userInfo?.userName}
              </Typography.Title>
            </Col>
            <Col span={2}>
              <Popconfirm
                title="Bạn có muốn đăng xuất không"
                okText="Có"
                cancelText="Không"
                placement="left"
                onConfirm={onLogout}
                icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              >
                <Link
                  className="logo"
                  to="/"
                  style={{
                    color: "white",
                  }}
                >
                  Đăng xuất
                  <LogoutOutlined
                    style={{ position: "relative", top: -3, right: -5 }}
                  />
                </Link>
              </Popconfirm>
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Hiệu sách online của Long
        </Footer>
      </Layout>
    </Layout>
  );
};

export default SideBar;
