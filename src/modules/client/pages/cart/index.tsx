import { Col, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import useCarts from "../../../../common/hook/useCart";
import useRemoveItemCart from "../../../../common/hook/useRemoveItemCart";
import useTotalPrice from "../../../../common/hook/useTotalPrice";
import { RollbackOutlined } from "@ant-design/icons";
import { globalState } from "../../../../state/appState";
import { Link } from "react-router-dom";
type Props = {};

const Cart = (props: Props) => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const { carts, userInfo } = stateGlobal;
  const navigate = useNavigate();
  const { removeItemCart } = useRemoveItemCart();
  const { getCartItems } = useCarts();
  const { totalPrice, totalBill } = useTotalPrice();
  const [active, setActive] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [currentPrice, setCurrentPrice] = useState<number>();

  // khi ấn nút x để xóa sản phẩm khỏi giỏ thì gọi hàm này
  const onRemoveItem = async (bookId: string) => {
    // gọi hàm xóa item của custom hook, truyền theo id để xóa
    await removeItemCart({
      accountId: userInfo?.accountId || "",
      bookId: bookId,
    });
    // xóa xong lấy lại cart item để cập nhật lại dữ liệu trên màn hình
    await getCartItems({ accountId: userInfo?.accountId });
  };

  // nếu giỏ hàng thay đổi bất kì gì thì tính lại giá tiền
  React.useEffect(() => {
    if (carts) {
      totalPrice({ accountId: userInfo?.accountId });
    }
  }, [carts]);

  // nếu mục giảm giá được chọn hoặc thay đổi lựa chọn thì tính lại giá tiền
  React.useEffect(() => {
    if (active) {
      setCurrentPrice(
        totalBill && Math.floor(totalBill - totalBill * discount)
      );
      // set giá tiền hiện có vào state
      setStateGlobal({
        ...stateGlobal,
        currentPrice: currentPrice,
      });
    }
  }, [active]);

  return (
    <div id="cart">
      <div className="cart-container" style={{ backgroundColor: "white" }}>
        <Col
          span={18}
          style={{ padding: 20, display: "flex", backgroundColor: "white" }}
        >
          <RollbackOutlined
            style={{ fontSize: 20, marginRight: 10, color: "#ffbe2d" }}
          />
          <Typography.Title level={5}>
            <Link to="/" style={{ color: "#ffbe2d" }}>
              Quay lại
            </Link>
          </Typography.Title>
        </Col>
        <p className="title">Thông tin giỏ hàng</p>
        <div className="d-flex">
          <div className="cart-left">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>SẢN PHẨM</th>
                  <th>GIÁ</th>
                  <th>SỐ LƯỢNG</th>
                  <th>TỔNG</th>
                </tr>
              </thead>
              <tbody>
                {carts?.map((item, index) => (
                  <tr key={index}>
                    <td className="btn-remove">
                      <button
                        className="remove"
                        onClick={() => onRemoveItem(item.bookId)}
                      >
                        x
                      </button>
                    </td>
                    <td className="product">
                      <div className="image">
                        <img
                          src={item?.bookImage || "/images/image.png"}
                          alt=""
                        />
                      </div>
                      <div className="name">{item.bookName}</div>
                    </td>
                    <td className="price">
                      <div className="d-flex justify-content-center">
                        <div>{item.bookPrice}</div>
                        <span>đ</span>
                      </div>
                    </td>
                    <td className="quantity">
                      <input
                        type="number"
                        name="quantity"
                        id=""
                        value={item.numberBook}
                        onChange={() => {}}
                        disabled
                      />
                    </td>
                    <td className="total">
                      <div className="d-flex justify-content-center">
                        <div>{item.bookPrice * item.numberBook}</div>
                        <span>đ</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cart-right">
            <table>
              <thead>
                <tr>
                  <th>TỔNG SỐ LƯỢNG</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Tổng phụ">{currentPrice || totalBill}₫</td>
                  <td data-label="Giao hàng">Tính phí giao hàng</td>
                  <td data-label="Tổng">{currentPrice || totalBill}₫</td>
                </tr>
              </tbody>
            </table>
            <div className="discount">
              <span
                className={active === 1 ? "active" : ""}
                onClick={() => {
                  setActive(1);
                  setDiscount(0.1);
                }}
              >
                Giảm 10% trên tổng hóa đơn
              </span>
              <span
                className={active === 2 ? "active" : ""}
                onClick={() => {
                  setActive(2);
                  setDiscount(0.15);
                }}
              >
                Giảm 15% trên tổng hóa đơn
              </span>
              <span
                className={active === 3 ? "active" : ""}
                onClick={() => {
                  setActive(3);
                  setDiscount(0.2);
                }}
              >
                Giảm 20% trên tổng hóa đơn
              </span>
              <span
                className={active === 4 ? "active" : ""}
                onClick={() => {
                  setActive(4);
                  setDiscount(0.3);
                }}
              >
                Giảm 30% trên tổng hóa đơn
              </span>
            </div>
            <button
              className="btn-payment"
              onClick={() => navigate("/pay-info")}
            >
              Tiến hành thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
