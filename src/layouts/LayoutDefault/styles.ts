import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem 0;

  @media only screen and (max-width: 1520px) {
    padding: 2rem 2rem;
  }
`;

export const LayoutContainerContent = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 70rem;
  margin: 0 auto;
`;
