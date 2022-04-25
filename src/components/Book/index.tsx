import React from "react";
import { Link } from "react-router-dom";
import { IBook } from "../../common/type";
interface Props {
  item: IBook;
}

const Book = ({ item }: Props) => {
  return (
    <div className="card-item">
      <div className="item">
        <div className="card-image">
          <img src="/images/mindmap-english-grammar.jpg" alt="" />
        </div>
        <div className="category">
          <p>{item.bookType}</p>
        </div>
        <Link to="/" className="btn-view">
          <p>Xem ngay</p>
        </Link>
        <div className="card-content">
          <span className="hr"> </span>
          <div className="title">
            <Link to="/">
              <br />
              {item.bookName}
            </Link>
          </div>
          <div className="price">
            <span>{item.bookPrice}</span>
            <span>đ</span>
          </div>
          <button className="buy">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
