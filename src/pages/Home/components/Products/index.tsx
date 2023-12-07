import QuantityControlComponent from "../../../../components/QuantityControl";
import { useCoffee } from "../../../../hooks/useCoffee";
import { formatPrice } from "../../../../utils/priceFormatter";
import { coffees } from "../../constants/coffees";
import {
  ActionCardSpace,
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
} from "./styles";
import { ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";

export type TCoffee = {
  id: number;
  name: string;
  description: string;
  label: string[];
  price: number;
  image: string;
  quantity?: number;
};

export type TQuantitites = {
  [id: number]: number;
};

function Products() {
  const { addNewCoffee } = useCoffee();

  const [quantities, setQuantities] = useState<TQuantitites>(
    {} as TQuantitites
  );

  function handleAddCoffee(coffeeData: TCoffee) {
    const coffeeId = coffeeData.id;

    addNewCoffee({
      coffeeData: {
        ...coffeeData,
        quantity: quantities[coffeeId] || 0, // Default to 1 if quantity is not set
      },
      quantity: quantities[coffeeId] || 0,
    });
  }

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
                <CoffeePrice>{formatPrice(item.price)}</CoffeePrice>
              </CoffeePriceContainer>
              <ActionCardSpace>
                <QuantityControlComponent
                  quantities={quantities}
                  idProduct={item.id}
                  onClickMinus={() =>
                    setQuantities({
                      ...quantities,
                      [item.id]: Math.max((quantities[item.id] || 0) - 1, 1),
                    })
                  }
                  onClickPlus={() =>
                    setQuantities({
                      ...quantities,
                      [item.id]: (quantities[item.id] || 0) + 1,
                    })
                  }
                />

                <AddToCartButton onClick={() => handleAddCoffee(item)}>
                  <ShoppingCart width={19.74} height={17.88} />
                </AddToCartButton>
              </ActionCardSpace>
            </FooterCard>
          </CoffeeCard>
        ))}
      </CoffeList>
    </ProductsContainer>
  );
}

export default Products;
