import React from "react";
import { Link } from "react-router-dom";
type Props = {};

const Book = (props: Props) => {
  return (
    <div className="card-item">
      <div className="item">
        <div className="card-image">
          <img src="/images/mindmap-english-grammar.jpg" alt="" />
        </div>
        <div className="card-content">
          <span className="hr"> </span>
          <div className="title">
            <Link to="">
              <br />
              Mind Map English Grammar – Ngữ pháp tiếng anh bằng sơ đồ tư duy
            </Link>
          </div>
          <div className="price">
            <span>190.000</span>
            <span>đ</span>
          </div>
          <button className="buy">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
