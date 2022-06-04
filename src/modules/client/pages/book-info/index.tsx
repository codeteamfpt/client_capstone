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
  // lấy id book trên đường dẫn
  let { bookId: id } = useParams<"bookId">();
  const { getBook, book } = useBook();

  const { addToCart } = useAddToCart();
  const [stateGlobal, _] = useRecoilState(globalState);
  const { userInfo } = stateGlobal;

  // nếu id thay đổi thì lấy lại book khác
  React.useEffect(() => {
    if (id) {
      getBook({ bookId: id || "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  // khi ấn vào nút add to cart thì gọi hàm này
  const onAddToCart = async () => {
    // gọi hàm addtocart từ custom hook, truyền theo dữ liệu vào request
    await addToCart({
      accountId: userInfo?.accountId || "",
      bookId: id || "",
      numberBook: 1,
    });
    // thông báo thêm vào thành công
    NotificationSuccess(
      "Thông báo",
      `Sản phẩm: ${book?.bookName} - được thêm vào giỏ hàng`
    );
  };
  return (
    <div className="book-info">
      <div className="container">
        <div className="d-flex">
          <div className="image">
            <img src={book?.bookImage} alt="" />
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
