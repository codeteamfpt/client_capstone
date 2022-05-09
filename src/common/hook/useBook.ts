import React from "react";
import { useRecoilState } from "recoil";
import apis from "../../services/apis";
import { globalState } from "../../state/appState";
import { IBook } from "../type";

const useBook = () => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const getBook = async (data: IBook) => {
    const book = await apis.getBook(data).then((data) => data);
    setStateGlobal({
      ...stateGlobal,
      book: book,
    });
    return book;
  };
  return {
    getBook,
  };
};

export default useBook;
