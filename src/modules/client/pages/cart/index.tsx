import React from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import useCarts from "../../../../common/hook/useCart";
import useRemoveItemCart from "../../../../common/hook/useRemoveItemCart";
import { NotificationSuccess } from "../../../../components/Notification";
import { globalState } from "../../../../state/appState";
type Props = {};

const Cart = (props: Props) => {
  const [stateGlobal, _] = useRecoilState(globalState);
  const navigate = useNavigate();
  const { removeItemCart } = useRemoveItemCart();
  const { getCartItems } = useCarts();
  const { carts, userInfo } = stateGlobal;
  const onPay = () => {
    NotificationSuccess("Thông báo", "Bạn đã thanh toán thành công đơn hàng");
  };
  const onRemoveItem = async (bookId: string) => {
    await removeItemCart({
      accountId: userInfo?.accountId || "",
      bookId: bookId,
    });
    await getCartItems({ accountId: userInfo?.accountId });
  };
  return (
    <div id="cart">
      <div className="cart-container" style={{ backgroundColor: "white" }}>
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
                          src="/images/bia-truoc-Chinh-phuc-tieng-Nhat-tu-con-so-0-tap-1-convert.png"
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
                  <td data-label="Tổng phụ">150.000₫</td>
                  <td data-label="Giao hàng">Tính phí giao hàng</td>
                  <td data-label="Tổng">150.000₫</td>
                </tr>
              </tbody>
            </table>

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
