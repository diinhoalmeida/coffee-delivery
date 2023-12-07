import {
  BadgeQuantity,
  ButtonLocation,
  ButtonShoppingCart,
  HeaderContainer,
  HeaderContainerLocationDiv,
} from "./styles";
import Logo from "../../assets/logo.png";
import { MapPinLine, ShoppingCartSimple } from "@phosphor-icons/react";
import { useCoffee } from "../../hooks/useCoffee";
import { useNavigate } from "react-router-dom";

function Header() {
  const { coffeeQuantity } = useCoffee();
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <img
        src={Logo}
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
        alt="logo copo de cafe com foguete no meio mais nome coffee delivery"
        width={84}
        height={40}
      />
      <HeaderContainerLocationDiv>
        <ButtonLocation>
          <MapPinLine width={22} height={22} /> <p>Porto Alegre, RS</p>
        </ButtonLocation>
        <ButtonShoppingCart onClick={() => navigate("/checkout")}>
          <BadgeQuantity>{coffeeQuantity}</BadgeQuantity>
          <ShoppingCartSimple width={22} height={22} />
        </ButtonShoppingCart>
      </HeaderContainerLocationDiv>
    </HeaderContainer>
  );
}

export default Header;
