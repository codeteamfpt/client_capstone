import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./Routes";
import { RecoilRoot } from "recoil";
import "./styles/style.scss";
import "antd/dist/antd.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// đặt tiêu đề cho trang web
document.title = "Cửa hàng sách của Long";
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppRoutes />
    </RecoilRoot>
  </React.StrictMode>
);
