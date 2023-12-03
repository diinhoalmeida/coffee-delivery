import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/LayoutDefault";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}></Route>
    </Routes>
  );
}
