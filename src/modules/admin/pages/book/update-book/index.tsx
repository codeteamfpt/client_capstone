import React from "react";
import { useNavigate, useParams } from "react-router";
import useBook from "../../../../../common/hook/useBook";
import useBooks from "../../../../../common/hook/useBooks";
import useUpdateBook from "../../../../../common/hook/useUpdateBook";
import { IBook } from "../../../../../common/type";
import BookForm from "../book-form/BookForm";

type Props = {};

const UpdateBook = (props: Props) => {
  const { getBooks } = useBooks();
  const { updateBook } = useUpdateBook();
  const navigate = useNavigate();

  const onSave = async (values: IBook) => {
    await updateBook(values);
    await getBooks();
    navigate("/admin-book");
  };
  return <BookForm title="Cập nhật sách" typeForm="update" onSave={onSave} />;
};

export default UpdateBook;
