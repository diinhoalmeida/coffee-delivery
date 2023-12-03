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
  border-radius: 6px;
  padding: 0 10px;
`;
