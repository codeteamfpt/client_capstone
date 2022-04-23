import React from "react";
import { useRecoilState } from "recoil";
import BookTable from "./BookTable";
import { globalState } from "../../../../state/appState";
import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
type Props = {};

const BookManager = (props: Props) => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const { books } = stateGlobal;
  const onDelete = () => () => {};
  const onEdit = () => () => {};

  return (
    <Row justify="center" style={{ marginTop: 60 }}>
      <Col span={22} style={{ backgroundColor: "white" }}>
        <Col span={22}>
          <Title level={2} style={{ padding: "20px 0 0 20px" }}>
            Quản lí sách
          </Title>
        </Col>
        <Row justify="center">
          <Col span={22}>
            <Col span={24}>
              <BookTable items={books} onDelete={onDelete} onEdit={onEdit} />
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default BookManager;
