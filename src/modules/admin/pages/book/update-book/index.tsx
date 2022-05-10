import React from "react";
import { useNavigate, useParams } from "react-router";
import useBook from "../../../../../common/hook/useBook";
import useBooks from "../../../../../common/hook/useBooks";
import useUpdateBook from "../../../../../common/hook/useUpdateBook";
import { IBook } from "../../../../../common/type";
import BookForm from "../book-form/BookForm";

type Props = {};

const UpdateBook = (props: Props) => {
  let { bookId: id } = useParams<"bookId">();
  const { getBooks } = useBooks();
  const { getBook, book } = useBook();

  const { updateBook } = useUpdateBook();
  const navigate = useNavigate();
  // lỗi get book delay
  React.useEffect(() => {
    if (id) {
      getBook({ bookId: id || "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  console.log(book);

  const onSave = async (values: IBook) => {
    await updateBook(values);
    await getBooks();
    navigate("/admin-book");
  };
  return (
    <BookForm
      title="Cập nhật sách"
      typeForm="update"
      onSave={onSave}
      item={book}
    />
  );
};

export default UpdateBook;
