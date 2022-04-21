import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div id="footer">
      <div className="copyright-footer">
        CÔNG TY CỔ PHẦN SÁCH MCBOOKS
        <br />
        VP Hà Nội : Ô số e34 - Khu đấu giá 3ha - Phúc Diễn - Bắc Từ Liêm - Hà
        Nội <br />
        Hotline : 0986567724 <br />
        VP Miền Nam: Số 45 đường 8, KP5, Hiệp Bình Chánh, Thủ Đức, TP Hồ Chí
        Minh
        <br />
        Hotline: 02866609398
        <br />
        Email: contact@mcbooks.vn <br />
        <br />
        <p style={{ padding: 20 }}>
          <span>HỖ TRỢ KHÁCH HÀNG</span>
        </p>
        <p>
          <span>
            <span>Hotline</span>: 0986567724&nbsp;
          </span>
          <span>
            <br />
            <span>
              <a href="/huong-dan-mua-hang-2/">Hướng dẫn mua hàng</a>
              <br />
              <a href="/giao-nhan-va-thanh-toan/">Giao nhận và thanh toán</a>
              <br />
              <a href="/chinh-sach-doi-tra-hoan-tien-cua-mcbooks/">
                Chính sách Đổi – Trả – Hoàn tiền
              </a>
              <br />
              <a href="/dang-ky-thanh-vien/">Đăng ký thành viên</a>
              <br />
              <a href="/chinh-sach-bao-mat/">Chính sách bảo mật</a>
            </span>
          </span>
        </p>{" "}
      </div>
    </div>
  );
};

export default Footer;
