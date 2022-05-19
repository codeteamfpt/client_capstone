import { RollbackOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import Title from "antd/lib/typography/Title";
import { default as React } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useCarts from "../../../../common/hook/useCart";
import OrderTable from "./OrderTable";
type Props = {};

const OrderManager = (props: Props) => {
  const { accountId: id } = useParams<"accountId">();
  const { getCartItems, carts } = useCarts();
  React.useEffect(() => {
    if (id) {
      getCartItems({ accountId: id || "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <Row justify="center" style={{ marginTop: 60 }}>
      <Col span={22} style={{ backgroundColor: "white" }}>
        <Col span={22}>
          <Title level={2} style={{ padding: "40px 0 0 40px" }}>
            Quản lí đơn hàng
          </Title>
        </Col>
        <Row justify="center">
          <Col span={22}>
            <Col span={24}>
              <OrderTable
                items={carts}
                onDelete={() => () => {}}
                onEdit={() => () => {}}
              />
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default OrderManager;
