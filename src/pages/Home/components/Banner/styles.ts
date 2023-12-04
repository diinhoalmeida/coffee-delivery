import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  padding: 6rem 0 3rem 0;

  @media only screen and (max-width: 688px) {
    flex-direction: column;
  }
`;

export const BannerDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BannerTitle = styled.h1`
  font-size: 3rem;
  line-height: 130%;
  font-weight: 900;
`;

export const BannerSubtitle = styled.p`
  font-size: 20px;
  line-height: 130%;
`;
export const BannerSiteCharacteristcsText = styled.p`
  font-size: 16px;
  line-height: 130%;
`;

export const CharacteristicsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const BannerSiteCharacteristcs = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 50%;
  margin-bottom: 15px;

  @media only screen and (max-width: 672px) {
    width: 100%;
  }
`;

const ICONS_COLOR = {
  yellowDark: "yellow-dark",
  baseText: "base-text",
  yellow: "yellow",
  purple: "purple",
} as const;

export type IconColorType = keyof typeof ICONS_COLOR;

export interface IItemStyleProps {
  iconColor: IconColorType;
}

export const BannerSiteCharacteristcsIcon = styled.div<IItemStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;

  border-radius: 50%;

  background: ${(props) => props.theme[ICONS_COLOR[props.iconColor]]};
`;

export const BannerImage = styled.img`
  width: 478px;
  height: 360px;

  @media only screen and (max-width: 1040px) {
    width: 341px;
    height: 258px;
  }

  @media only screen and (max-width: 896px) {
    display: none;
  }
`;
