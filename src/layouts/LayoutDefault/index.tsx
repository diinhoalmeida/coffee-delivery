import { Outlet } from "react-router-dom";

import { LayoutContainer, LayoutContainerContent } from "./styles";
import Header from "../../components/Header";

export default function DefaultLayout() {
  return (
    <LayoutContainer>
      <LayoutContainerContent>
        <Header />

        <Outlet />
      </LayoutContainerContent>
    </LayoutContainer>
  );
}
