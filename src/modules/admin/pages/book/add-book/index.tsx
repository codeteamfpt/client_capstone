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

  // khi ấn vào nút save thì gọi hàm này
  const onSave = async (values: IBook) => {
    // tạo sách xong thì lấy lại list sách ra để cập nhật cho màn hình
    await createBook(values);
    await getBooks();
    // sau đó chuyển về trang list book
    navigate("/admin-book");
  };
  return <BookForm title="Tạo mới sách" typeForm="create" onSave={onSave} />;
};

export default AddBook;
