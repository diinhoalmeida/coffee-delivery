import { useCoffee } from "../../../../hooks/useCoffee";
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
import { useState } from "react";

type TCoffee = {
  id: number;
  name: string;
  description: string;
  label: string[];
  price: number;
  image: string;
};

type TQuantitites = {
  [id: number]: number;
};

function Products() {
  const { addNewCoffee } = useCoffee();

  const [quantities, setQuantities] = useState<TQuantitites>(
    {} as TQuantitites
  );

  function formatPrice(arg: number) {
    const priceFormatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(arg);
    return priceFormatted;
  }

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
              <QuantityControl>
                <Minus
                  width={14}
                  height={14}
                  cursor="pointer"
                  onClick={() =>
                    setQuantities({
                      ...quantities,
                      [item.id]: Math.max((quantities[item.id] || 0) - 1, 1),
                    })
                  }
                />
                <Quantity>{quantities[item.id] || 0}</Quantity>
                <Plus
                  width={14}
                  height={14}
                  cursor="pointer"
                  onClick={() =>
                    setQuantities({
                      ...quantities,
                      [item.id]: (quantities[item.id] || 0) + 1,
                    })
                  }
                />
              </QuantityControl>
              <AddToCartButton onClick={() => handleAddCoffee(item)}>
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
