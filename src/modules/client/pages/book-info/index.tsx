import React from "react";
import { useRecoilState } from "recoil";
import useAddToCart from "../../../../common/hook/useAddToCart";
import { IBook } from "../../../../common/type";
import { NotificationSuccess } from "../../../../components/Notification";
import { globalState } from "../../../../state/appState";

type Props = {
  item?: IBook;
};

const BookInfo = ({ item }: Props) => {
  const { addToCart } = useAddToCart();
  const [stateGlobal, _] = useRecoilState(globalState);
  const { userInfo } = stateGlobal;
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
              <span>Tự học 2000 từ vựng tiếng Anh theo chủ đề</span>
            </div>
            <div className="price">
              <span>65.000₫</span>
            </div>
            <div className="description">
              Cuốn sách dành cho những người mới bắt đầu tiếp cận với ngôn ngữ
              Nhật Bản, mới bắt đầu học tiếng Nhật hay cả những giảng viên giảng
              dạy tại các lớp học tiếng Nhật. Mỗi bài học sẽ được hướng dẫn phân
              bổ thời gian để đạt hiệu quả tối đa một cách khóa học. Cuốn sách
              này giúp bạn: Nắm chắc bảng chữ cái và cách sử dụng từ trong tiếng
              Nhật; Bước đầu trau dồi vốn từ vựng, cấu trúc ngữ pháp và cách sử
              dụng mẫu câu trong hoàn cảnh giao tiếp; Tiếp cận với ngôn ngữ Nhật
              Bản gần nhất qua các file audio được tối ưu trên app.
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
