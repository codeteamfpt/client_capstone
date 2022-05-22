import React from "react";
import { useRecoilState } from "recoil";
import useBooks from "../../../../common/hook/useBooks";
import useOrders from "../../../../common/hook/useOrders";
import Book from "../../../../components/Book";
import { globalState } from "../../../../state/appState";

const HomePage = () => {
  const { getBooks } = useBooks();
  const { getOrders } = useOrders();

  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const { books, userInfo } = stateGlobal;

  React.useEffect(() => {
    if (!books) {
      getBooks();
    }
  }, [books]);
  React.useEffect(() => {
    if (userInfo) getOrders({ accountId: userInfo?.accountId });
  }, [userInfo]);
  return (
    <>
      <div className="section">
        <p>
          Công ty sách MCBooks
          <br />
          12 NĂM XUẤT BẢN VÀ PHÁT HÀNH SÁCH NGOẠI NGỮ
        </p>
        <p>
          Chuyên xuất bản, liên kết xuất bản với các tác giả nổi tiếng trong và
          ngoài nước
          <br />
          để phát hành các dòng sách học ngoại ngữ Anh, Trung, Nhật, Hàn, sách
          học ngoại ngữ Trẻ em,… dẫn đầu thị trường Việt Nam
        </p>
      </div>
      <div id="list-book">
        <h3 className="title-list">DANH MỤC SẢN PHẨM</h3>
        <div className="book-container">
          {books?.map((item, index) => (
            <Book key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
