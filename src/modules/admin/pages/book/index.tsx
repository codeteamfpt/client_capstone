import { Button, Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import useBooks from "../../../../common/hook/useBooks";
import useRemoveBook from "../../../../common/hook/useRemoveBook";
import { IBook } from "../../../../common/type";
import { globalState } from "../../../../state/appState";
import BookTable from "./BookTable";
type Props = {};

const BookManager = (props: Props) => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const { books } = stateGlobal;
  const { getBooks } = useBooks();
  const { removeBook } = useRemoveBook();

  const navigate = useNavigate();
  React.useEffect(() => {
    if (!books) {
      getBooks();
    }
  }, [books]);
  const onDelete = (record: IBook) => async () => {
    await removeBook(record);
    await getBooks();
  };
  const onEdit = (record: IBook) => async () => {
    navigate(`/admin-book/update/${record.bookId}`);
  };
  const onCreate = () => {
    navigate("/admin-book/add");
  };
  return (
    <Row justify="center" style={{ marginTop: 60 }}>
      <Col span={22} style={{ backgroundColor: "white" }}>
        <Col
          span={24}
          style={{ backgroundColor: "white", padding: "40px 40px 0 40px" }}
        >
          <Row justify="space-between">
            <Col>
              <Title level={2}>Quản lí sách</Title>
            </Col>
            <Col style={{ margin: "40px 0 20px 0" }}>
              <Button type="primary" onClick={onCreate}>
                Thêm sách
              </Button>
            </Col>
          </Row>
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
