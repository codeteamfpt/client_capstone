import React from "react";
import { useParams } from "react-router";
import { useRecoilState } from "recoil";
import useAddToCart from "../../../../common/hook/useAddToCart";
import useBook from "../../../../common/hook/useBook";
import { IBook } from "../../../../common/type";
import { NotificationSuccess } from "../../../../components/Notification";
import { globalState } from "../../../../state/appState";

type Props = {
  item?: IBook;
};

const BookInfo = ({ item }: Props) => {
  let { bookId: id } = useParams<"bookId">();
  const { getBook, book } = useBook();

  const { addToCart } = useAddToCart();
  const [stateGlobal, _] = useRecoilState(globalState);
  const { userInfo } = stateGlobal;
  React.useEffect(() => {
    if (id) {
      getBook({ bookId: id || "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const onAddToCart = async () => {
    await addToCart({
      accountId: userInfo?.accountId || "",
      bookId: item?.bookId || "",
      numberBook: 1,
    });
    NotificationSuccess(
      "Thông báo",
      `Sản phẩm: ${item?.bookName} - được thêm vào giỏ hàng`
    );
  };
  return (
    <div className="book-info">
      <div className="container">
        <div className="d-flex">
          <div className="image">
            <img src="/images/mindmap-english-grammar.jpg" alt="" />
          </div>
          <div className="right">
            <div className="title">
              <span>{book?.bookName}</span>
            </div>
            <div className="price">
              <span>{book?.bookPrice}₫</span>
            </div>
            <div className="description">
              <span>{book?.bookInfo}</span>
            </div>
            <div className="btn-add-to-cart">
              <button className="buy" onClick={onAddToCart}>
                <img src="/images/shopping-cart.png" alt="" />
                <span>Thêm vào giỏ</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
