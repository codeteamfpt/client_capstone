import { Button, Form, Input, InputNumber, Row, Col, Typography } from "antd";
import React from "react";
import { useRecoilState } from "recoil";
import { IBook } from "../../../../../common/type";
import { globalState } from "../../../../../state/appState";

type Props = {
  typeForm?: string;
  onSave?: (values: IBook) => void;
  title?: string;
};

const BookForm = (props: Props) => {
  const [stateGlobal, _] = useRecoilState(globalState);
  const { book } = stateGlobal;
  const { onSave, typeForm, title } = props;
  const initialValues: IBook = {
    bookId: book?.bookId || "",
    bookName: book?.bookName || "",
    bookInfo: book?.bookInfo || "",
    bookPrice: book?.bookPrice || 0,
    bookType: book?.bookId || "",
    bookImage: book?.bookImage || "",
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
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={initialValues}
          onFinish={onSave}
          autoComplete="off"
        >
          <Row>
            <Col span={12}>
              <Form.Item
                label="Hình ảnh"
                name="bookImage"
                rules={[{ required: true, message: "Vui lòng nhập vào ảnh" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Row justify="center">
                <Col span={24}>
                  <Form.Item
                    label="Tên sách "
                    name="bookName"
                    rules={[
                      { required: true, message: "Vui lòng nhập vào tên sách" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Loại sách"
                    name="bookType"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập vào loại sách",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Giá tiền"
                    name="bookPrice"
                    rules={[
                      { required: true, message: "Vui lòng nhập vào giá tiền" },
                    ]}
                  >
                    <InputNumber />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Mô tả"
                    name="bookInfo"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập vào mô tả sách",
                      },
                    ]}
                  >
                    <Input.TextArea />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row justify="center">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    {typeForm === "create" ? "Tạo sách" : "Chỉnh sửa"}
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

export default BookForm;
