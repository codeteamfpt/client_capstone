import React from "react";
import { useRecoilState } from "recoil";
import apis from "../../services/apis";
import { globalState } from "../../state/appState";

const useBooks = () => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const getBooks = async () => {
    const books = await apis.getAllBooks().then((data) => data);
    setStateGlobal({
      ...stateGlobal,
      books: books,
    });
  };
  return {
    getBooks,
  };
};

export default useBooks;
