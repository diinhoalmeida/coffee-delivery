import {
  BannerContainer,
  BannerDetails,
  BannerImage,
  BannerSiteCharacteristcs,
  BannerSiteCharacteristcsIcon,
  BannerSiteCharacteristcsText,
  BannerSubtitle,
  BannerTitle,
  CharacteristicsContainer,
  IconColorType,
} from "./styles";
import CoffeeBanner from "../../../../assets/coffee-banner.png";
import { Package, Coffee, Timer, ShoppingCart } from "@phosphor-icons/react";
import { items } from "../../constants/caracteristics";

function Banner() {
  function createIcon(iconName: string) {
    switch (iconName) {
      case "Package":
        return <Package weight="fill" size={16} />;
      case "Coffee":
        return <Coffee weight="fill" size={16} />;
      case "Timer":
        return <Timer weight="fill" size={16} />;
      default:
        return <ShoppingCart weight="fill" size={16} />;
    }
  }

  return (
    <BannerContainer>
      <BannerDetails>
        <BannerTitle>
          Encontre o café perfeito para qualquer hora do dia
        </BannerTitle>
        <BannerSubtitle>
          Com o Coffee delivery você recebe seu café onde estiver, a qualquer
          hora
        </BannerSubtitle>
        <CharacteristicsContainer>
          {items.map((item, index: number) => (
            <BannerSiteCharacteristcs key={index}>
              <BannerSiteCharacteristcsIcon
                iconColor={item.color as IconColorType}
              >
                {createIcon(item.icon)}
              </BannerSiteCharacteristcsIcon>
              <BannerSiteCharacteristcsText>
                {item.text}
              </BannerSiteCharacteristcsText>
            </BannerSiteCharacteristcs>
          ))}
        </CharacteristicsContainer>
      </BannerDetails>
      <BannerImage
        src={CoffeeBanner}
        alt="logo copo de cafe com foguete no meio mais nome coffee delivery"
      />
    </BannerContainer>
  );
}

export default Banner;
