import { Button, Col, Form, Input, InputNumber, Row, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IBook } from "../../../../../common/type";
import { RollbackOutlined } from "@ant-design/icons";

type Props = {
  typeForm?: string;
  onSave?: (values: IBook) => void;
  title?: string;
  item?: IBook;
};

const BookForm = (props: Props) => {
  const { onSave, typeForm, title, item } = props;
  const [form] = Form.useForm();
  const [bookImage, setBookImage] = useState<string>("/images/image.png");

  const initialValues: IBook = {
    bookId: item?.bookId || "",
    bookName: item?.bookName || "",
    bookInfo: item?.bookInfo || "",
    bookPrice: item?.bookPrice || 0,
    bookType: item?.bookType || "",
    bookImage: item?.bookImage || "",
  };
  React.useEffect(() => {
    if (item) {
      setBookImage(item?.bookImage || "/images/image.png");
    }
  }, [item]);
  React.useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [initialValues]);

  const onImageChange = () => {
    setBookImage(form.getFieldValue("bookImage"));
  };
  React.useEffect(() => {
    form.setFieldsValue({ ...initialValues, bookImage: bookImage });
  }, [bookImage]);
  return (
    <Row
      justify="center"
      style={{ backgroundColor: "white", padding: 50, margin: 40 }}
    >
      <Col span={18} style={{ padding: "20px 0 0 0", display: "flex" }}>
        <RollbackOutlined style={{ fontSize: 20, marginRight: 10 }} />
        <Typography.Title level={5}>
          <Link to="/admin-book" style={{ color: "black" }}>
            Quay lại
          </Link>
        </Typography.Title>
      </Col>
      <Col span={18} style={{ paddingBottom: 50 }}>
        <Typography.Title level={3}>{title}</Typography.Title>
      </Col>
      <Col span={20}>
        <Form
          name="basic"
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onFinish={onSave}
          autoComplete="off"
        >
          <Row>
            <Col span={12}>
              <Row justify="center">
                <Col>
                  <img
                    style={{
                      objectFit: "contain",
                      width: 300,
                      height: 300,
                      border: "1px solid #ccc",
                    }}
                    src={bookImage}
                    alt="avatar"
                  />
                </Col>
              </Row>
            </Col>
            <Form.Item name="bookId">
              <Input hidden />
            </Form.Item>
            <Col span={12}>
              <Row justify="center">
                <Col span={24}>
                  <Form.Item
                    label="Hình ảnh"
                    name="bookImage"
                    rules={[
                      { required: true, message: "Vui lòng nhập vào ảnh" },
                    ]}
                  >
                    <Input onChange={onImageChange} />
                  </Form.Item>
                </Col>
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
            <Col span={24} style={{ marginTop: 20 }}>
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
