import styled from "styled-components";

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme["base-button"]};
  gap: 10px;
  height: 100%;
  border-radius: 6px;

  padding: 0 0.5rem;
  color: ${(props) => props.theme["purple"]};
`;

export const Quantity = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme["base-title"]};
  font-weight: 500;
`;
