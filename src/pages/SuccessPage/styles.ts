import styled from "styled-components";

export const SuccessPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding-top: 3rem;

  @media only screen and (max-width: 896px) {
    grid-template-columns: 1fr;
  }
`;

export const SuccessPageDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

export const SuccessPageDetailsImage = styled.img`
  width: 492px;
  height: 293px;
  position: relative;
  bottom: -72px;

  @media only screen and (max-width: 1008px) {
    width: 378px;
    height: 225px;
    bottom: -160px;
  }

  @media only screen and (max-width: 896px) {
    position: static;
  }
`;

export const SuccessPageMessage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SuccessPageTitleMessage = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const SuccessPageMessageToClient = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

export const DeliveryDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DeliveryDetailsTextSpace = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ICONS_COLOR = {
  yellowDark: "yellow-dark",
  yellow: "yellow",
  purple: "purple",
} as const;

export type IconColorType = keyof typeof ICONS_COLOR;

export interface IDeliveryDetailsIcon {
  iconColor: IconColorType;
}

export const DeliveryDetailsIcon = styled.div<IDeliveryDetailsIcon>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme[ICONS_COLOR[props.iconColor]]};
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

export const DeliveryDetailsTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeliveryStrongLine = styled.p`
  font-weight: bold;
  display: inline;
  color: ${(props) => props.theme["base-text"]};
`;

export const DeliveryDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid;
`;
