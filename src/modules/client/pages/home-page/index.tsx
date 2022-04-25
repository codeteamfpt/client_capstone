import React from "react";
import useBooks from "../../../../common/hook/useBooks";
import Book from "../../../../components/Book";

const HomePage = () => {
  const { books } = useBooks();

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
