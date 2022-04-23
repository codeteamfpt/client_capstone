import React from "react";

type Props = {};

const Cart = (props: Props) => {
  return (
    <div id="cart">
      <div className="cart-container">
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
                <tr>
                  <td className="btn-remove">
                    <button className="remove">x</button>
                  </td>
                  <td className="product">
                    <div className="image">
                      <img
                        src="/images/bia-truoc-Chinh-phuc-tieng-Nhat-tu-con-so-0-tap-1-convert.png"
                        alt=""
                      />
                    </div>
                    <div className="name">product</div>
                  </td>
                  <td className="price">
                    <div className="d-flex justify-content-center">
                      <div>123</div>
                      <span>đ</span>
                    </div>
                  </td>
                  <td className="quantity">
                    <input type="number" name="quantity" id="" value={1} />
                  </td>
                  <td className="total">
                    <div className="d-flex justify-content-center">
                      <div>123</div>
                      <span>đ</span>
                    </div>
                  </td>
                </tr>
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
            <button className="btn-payment">Tiến hành thanh toán</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
