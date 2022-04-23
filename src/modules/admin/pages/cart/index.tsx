import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { useRecoilState } from "recoil";
import { globalState } from "../../../../state/appState";
import CartTable from "./CartTable";

type Props = {};

const CartManager = (props: Props) => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const { carts } = stateGlobal;
  const onDelete = () => () => {};
  const onEdit = () => () => {};

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
              <CartTable items={carts} onDelete={onDelete} onEdit={onEdit} />
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CartManager;
