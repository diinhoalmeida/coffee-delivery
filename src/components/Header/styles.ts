import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderContainerLocationDiv = styled.div`
  display: flex;
  gap: 10px;
  align-content: center;
`;

export const ButtonLocation = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  border: none;
  border-radius: 6px;
  gap: 5px;
  padding: 0 10px;
  p {
    font-weight: 600;
  }
`;

export const ButtonShoppingCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  border: none;
  cursor: pointer;
  border-radius: 6px;
  position: relative;
  padding: 0 10px;
`;

export const BadgeQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  position: absolute;
  top: -8px;
  right: -8px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme["yellow-dark"]};
`;
