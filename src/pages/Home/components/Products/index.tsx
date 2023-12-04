import { coffees } from "../../constants/coffees";
import {
  AddToCartButton,
  BadgeTypeCoffee,
  BadgeTypeCoffeeText,
  CoffeList,
  CoffeeCard,
  CoffeeDescription,
  CoffeeDetails,
  CoffeeName,
  CoffeePrice,
  CoffeePriceContainer,
  FooterCard,
  HeaderCard,
  MoneyType,
  ProductsContainer,
  ProductsTitle,
  Quantity,
  QuantityControl,
} from "./styles";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";

function Products() {
  return (
    <ProductsContainer>
      <ProductsTitle>Nossos cafés</ProductsTitle>
      <CoffeList>
        {coffees.map((item, index: number) => (
          <CoffeeCard key={index}>
            <HeaderCard>
              <img src={item.image} alt={item.name} width={120} height={120} />
              <BadgeTypeCoffee>
                <BadgeTypeCoffeeText>
                  {item.label[0].toUpperCase()}
                </BadgeTypeCoffeeText>
              </BadgeTypeCoffee>
            </HeaderCard>
            <CoffeeDetails>
              <CoffeeName>{item.name}</CoffeeName>
              <CoffeeDescription>{item.description}</CoffeeDescription>
            </CoffeeDetails>
            <FooterCard>
              <CoffeePriceContainer>
                <MoneyType>R$</MoneyType>
                <CoffeePrice>{item.price}</CoffeePrice>
              </CoffeePriceContainer>
              <QuantityControl>
                <Minus width={14} height={14} cursor="pointer" />
                <Quantity>1</Quantity>
                <Plus width={14} height={14} cursor="pointer" />
              </QuantityControl>
              <AddToCartButton>
                <ShoppingCart width={19.74} height={17.88} />
              </AddToCartButton>
            </FooterCard>
          </CoffeeCard>
        ))}
      </CoffeList>
    </ProductsContainer>
  );
}

export default Products;
