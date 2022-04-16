import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./Routes";
import { RecoilRoot } from "recoil";
import "./styles/style.scss";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppRoutes />
    </RecoilRoot>
  </React.StrictMode>
);
