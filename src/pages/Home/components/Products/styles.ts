import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductsTitle = styled.h2`
  font-size: 2rem;
`;

export const CoffeList = styled.div`
  display: grid;
  padding: 3rem 0;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  column-gap: 20px;
  row-gap: 30px;

  @media only screen and (max-width: 1248px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 864px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const HeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;
  align-items: center;
  top: -20px;
`;

export const BadgeTypeCoffee = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: 5px 15px;
  border-radius: 100px;

  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const BadgeTypeCoffeeText = styled.p`
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  font-size: 10px;
  font-weight: bold;
`;

export const CoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const CoffeeName = styled.h3`
  font-size: 20px;
  font-weight: 900;
`;

export const CoffeeDescription = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme["base-label"]};
  font-weight: 500;
`;

export const FooterCard = styled.div`
  display: flex;
  padding-bottom: 1rem;
  width: 100%;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const CoffeePriceContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ActionCardSpace = styled.div`
  display: flex;
  gap: 10px;
`;

export const MoneyType = styled.p`
  font-size: 14px;
`;

export const CoffeePrice = styled.p`
  font-size: 24px;
  font-weight: 900;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme["base-button"]};
  gap: 10px;
  height: 100%;
  border-radius: 6px;

  padding: 0 0.5rem;
  color: ${(props) => props.theme["purple"]};

  @media only screen and (max-width: 1056px) {
    margin-right: 0;
  }

  @media only screen and (max-width: 960px) {
    margin-right: -0.5rem;
  }

  @media only screen and (max-width: 816px) {
    margin-right: 0;
  }

  @media only screen and (max-width: 752px) {
    margin-right: -2rem;
  }

  @media only screen and (max-width: 544px) {
    margin-right: -5rem;
  }
`;

export const Quantity = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme["base-title"]};
  font-weight: 500;
`;

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  cursor: pointer;
  width: 38px;
  background-color: ${(props) => props.theme["purple-dark"]};
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme["base-card"]};
`;
