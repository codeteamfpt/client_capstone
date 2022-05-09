import { Col, Row, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import useBooks from "../../../../../common/hook/useBooks";
import useCreateBook from "../../../../../common/hook/useCreateBook";
import { IBook } from "../../../../../common/type";
import BookForm from "../book-form/BookForm";

type Props = {};

const AddBook = (props: Props) => {
  const { getBooks } = useBooks();
  const { createBook } = useCreateBook();
  const navigate = useNavigate();
  const onSave = async (values: IBook) => {
    await createBook(values);
    await getBooks();
    navigate("/admin-book");
  };
  return <BookForm title="Tạo mới sách" typeForm="create" onSave={onSave} />;
};

export default AddBook;
