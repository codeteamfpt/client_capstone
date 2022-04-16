import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./modules/Home/pages/home-page";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
