import styled, { css } from "styled-components";

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 1rem;
  padding-top: 3rem;

  @media only screen and (max-width: 944px) {
    grid-template-columns: 1fr;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AddressContainerTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const AddressContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2rem;
`;

export const ContentDescriptionContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContentDescriptionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ContentDescriptionTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ContentDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme["base-text"]};
`;

export const PaymentTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2rem;
`;

export const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 2rem;
  gap: 10px;

  @media only screen and (max-width: 592px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 448px) {
    grid-template-columns: 1fr;
  }
`;

export interface IPaymentMethodCardProps {
  isSelected?: boolean;
}

export interface IPaymentMethodCardProps {
  isSelected?: boolean;
}

export const PaymentMethodCard = styled.button<IPaymentMethodCardProps>`
  display: flex;
  background-color: ${(props) => props.theme["base-button"]};
  align-items: center;
  gap: 10px;
  padding: 1rem 0;
  justify-content: center;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s ease;

  border: 1px solid transparent;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-color: ${(props) => props.theme["purple"]};
      border-width: 1px;
    `}
`;

export const PaymentMethodCardText = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

export const CoffeeSelectedCheckout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CoffeeSelectedCheckoutTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const CoffeeSelectedCheckoutContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2rem;
`;

export const CoffeeListSelected = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const CoffeeCard = styled.div`
  display: flex;
  padding: 2rem 0;
  position: relative;
  gap: 1rem;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme["base-button"]};
`;

export const CoffeeCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CoffeeCardName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const CoffeeCardActions = styled.div`
  display: flex;
  gap: 5px;
`;

export const ButtonRemoveCoffee = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 10px;
  padding: 10px 1rem;
  justify-content: center;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;

export const ButtonRemoveCoffeeText = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme["base-text"]};
  font-weight: 500;
`;

export const TotalPriceByCoffee = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme["base-text"]};
  font-weight: bold;
  position: absolute;
  right: 0;

  @media only screen and (max-width: 448px) {
    top: 10px;
  }
`;

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number fullAddress fullAddress"
    "neighborhood city state";
  grid-gap: 16px 12px;

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  @media only screen and (max-width: 528px) {
    grid-template-areas:
      "cep cep cep"
      "street street street"
      "number number number"
      "fullAddress fullAddress fullAddress"
      "neighborhood neighborhood neighborhood"
      "city city city"
      "state state state";
  }
`;

export const TotalCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TotalCoffeesDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalCoffeesDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const TotalCoffeesValues = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const Total = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const ConfirmBuyButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  border: none;
  padding: 1rem 0;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => props.theme["yellow"]};
  border-radius: 6px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
