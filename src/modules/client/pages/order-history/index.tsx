import React from "react";
import { Row, Col, Table, Typography } from "antd";
import { ColumnsType } from "antd/lib/table";
import { IOrder } from "../../../../common/type";
import { useRecoilState } from "recoil";
import { globalState } from "../../../../state/appState";
import useOrders from "../../../../common/hook/useOrders";
import { RollbackOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

type Props = {};

const OrderHistory = (props: Props) => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const { orders, userInfo } = stateGlobal;
  const { getOrders } = useOrders();
  React.useEffect(() => {
    if (!orders) {
      getOrders({ accountId: userInfo?.accountId });
    }
  }, [orders]);
  const columns: ColumnsType<IOrder> = [
    {
      title: "STT",
      dataIndex: "billId",
      key: "#",
      width: 60,
      align: "center",
    },
    {
      title: "Tên đặt hàng",
      dataIndex: "name",
      key: "name",
      width: 200,
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: true,
      width: 200,
      align: "center",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      sorter: true,
      width: 150,
      align: "center",
    },
    {
      title: "Địa chỉ giao hàng",
      dataIndex: "location",
      key: "location",
      width: 300,
      align: "center",
    },
    {
      title: "Thành tiền",
      dataIndex: "totalBill",
      key: "totalBill",
      width: 150,
      align: "center",
    },
    {
      title: "Ngày đặt hàng",
      dataIndex: "createDate",
      key: "createDate",
      width: 150,
      align: "center",
    },
  ];
  return (
    <div id="order-history">
      <Row justify="center">
        <Col
          span={20}
          style={{ padding: 20, display: "flex", backgroundColor: "white" }}
        >
          <RollbackOutlined
            style={{ fontSize: 20, marginRight: 10, color: "#ffbe2d" }}
          />
          <Typography.Title level={5}>
            <Link to="/" style={{ color: "#ffbe2d" }}>
              Quay lại
            </Link>
          </Typography.Title>
        </Col>
        <Col span={20} style={{ padding: 20, backgroundColor: "white" }}>
          <Typography.Title level={2}>Lịch sử mua hàng</Typography.Title>
        </Col>
        <Col
          span={20}
          style={{ padding: 20, marginBottom: 60, backgroundColor: "white" }}
        >
          <Table
            rowKey="billId"
            columns={columns}
            dataSource={orders}
            bordered
          />
        </Col>
      </Row>
    </div>
  );
};

export default OrderHistory;
