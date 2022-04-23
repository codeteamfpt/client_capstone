import { Layout, Menu, Popconfirm } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React, { useState } from "react";
import { Outlet } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import {
  BookOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
type Props = {};

const SideBar = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const onCollapse = () => {
    setCollapsed(!collapsed);
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
          <Menu.Item
            key="2"
            icon={<ShoppingCartOutlined />}
            style={{ marginTop: 0 }}
          >
            <Link to="/admin-cart">Quản lí giỏ hàng</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />} style={{ marginTop: 0 }}>
            <Link to="/admin-account">Quản lí tài khoản</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, position: "relative" }}
        >
          <Popconfirm
            title="Bạn có muốn đăng xuất không"
            okText="Có"
            cancelText="Không"
            placement="left"
            onConfirm={() => {
              navigate("/");
            }}
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            style={{ position: "absolute", top: 0, right: 0 }}
          >
            <Link
              className="logo"
              to="/"
              style={{
                color: "white",
                position: "absolute",
                top: 0,
                right: 40,
              }}
            >
              Đăng xuất
              <LogoutOutlined
                style={{ position: "absolute", top: 25, right: -20 }}
              />
            </Link>
          </Popconfirm>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default SideBar;
