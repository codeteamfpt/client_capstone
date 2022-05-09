import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import useAddToCart from "../../common/hook/useAddToCart";
import useCarts from "../../common/hook/useCart";
import { IBook } from "../../common/type";
import { globalState } from "../../state/appState";
import { NotificationSuccess } from "../Notification";
interface Props {
  item: IBook;
}

const Book = ({ item }: Props) => {
  const [stateGlobal, _] = useRecoilState(globalState);
  const { userInfo } = stateGlobal;
  const { addToCart } = useAddToCart();
  const { getCartItems } = useCarts();

  const onAddToCart = async () => {
    await addToCart({
      accountId: userInfo?.accountId || "",
      bookId: item.bookId || "",
      numberBook: 1,
    });
    await getCartItems({ accountId: userInfo?.accountId });
    NotificationSuccess(
      "Thông báo",
      `Sản phẩm: ${item.bookName} - được thêm vào giỏ hàng`
    );
  };
  return (
    <div className="card-item">
      <div className="item">
        <div className="card-image">
          <img src="/images/mindmap-english-grammar.jpg" alt="" />
        </div>
        <div className="category">
          <p>{item.bookType}</p>
        </div>
        <Link to={`/book-detail/${item.bookId}`} className="btn-view">
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
          <button className="buy" onClick={onAddToCart}>
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
