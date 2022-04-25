import React from "react";
import { useRecoilState } from "recoil";
import apis from "../../services/apis";
import { globalState } from "../../state/appState";

const useBooks = () => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const { books } = stateGlobal;
  const getBooks = async () => {
    const books = await apis.getAllBooks().then((data) => data);
    setStateGlobal({
      ...stateGlobal,
      books: books,
    });
  };
  React.useEffect(() => {
    getBooks();
  }, []);
  return {
    books,
    getBooks,
  };
};

export default useBooks;
