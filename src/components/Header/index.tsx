import {
  ButtonLocation,
  ButtonShoppingCart,
  HeaderContainer,
  HeaderContainerLocationDiv,
} from "./styles";
import Logo from "../../assets/logo.png";
import { MapPinLine, ShoppingCartSimple } from "@phosphor-icons/react";

function Header() {
  return (
    <HeaderContainer>
      <img
        src={Logo}
        alt="logo copo de cafe com foguete no meio mais nome coffee delivery"
        width={84}
        height={40}
      />
      <HeaderContainerLocationDiv>
        <ButtonLocation>
          <MapPinLine width={22} height={22} /> <p>Porto Alegre, RS</p>
        </ButtonLocation>
        <ButtonShoppingCart>
          <ShoppingCartSimple width={22} height={22} />
        </ButtonShoppingCart>
      </HeaderContainerLocationDiv>
    </HeaderContainer>
  );
}

export default Header;
