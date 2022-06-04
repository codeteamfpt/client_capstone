import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import apis from "../../services/apis";
import { globalState } from "../../state/appState";
import { IBook } from "../type";

const useBook = () => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);

  const getBook = async (data: IBook) => {
    // truyền vào id lấy 1 quyển sách từ database ra
    const book = await apis.getBook(data).then((data) => data);
    // set vào state
    setStateGlobal({
      ...stateGlobal,
      book: book,
    });
    return book;
  };
  return {
    book: stateGlobal.book,
    getBook,
  };
};

export default useBook;
