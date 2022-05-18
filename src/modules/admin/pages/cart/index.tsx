import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { useParams } from "react-router";
import useCarts from "../../../../common/hook/useCart";
import CartTable from "./CartTable";

type Props = {};

const CartManager = (props: Props) => {
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
          <Title level={2} style={{ padding: "20px 0 0 20px" }}>
            Quản lí giỏ hàng
          </Title>
        </Col>
        <Row justify="center">
          <Col span={22}>
            <Col span={24}>
              <CartTable items={carts} />
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CartManager;
