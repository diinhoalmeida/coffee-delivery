import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/LayoutDefault";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import SuccessPage from "./pages/SuccessPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<SuccessPage />} />
      </Route>
    </Routes>
  );
}
