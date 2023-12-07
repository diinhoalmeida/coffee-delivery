import { Minus, Plus } from "@phosphor-icons/react";
import { Quantity, QuantityControl } from "./styles";
import { TQuantitites } from "../../pages/Home/components/Products";

interface IQuantityControlComponent {
  idProduct: number;
  quantities: TQuantitites;
  onClickMinus: () => void;
  onClickPlus: () => void;
}

function QuantityControlComponent({
  idProduct,
  quantities,
  onClickMinus,
  onClickPlus,
}: IQuantityControlComponent) {
  return (
    <QuantityControl>
      <Minus width={14} height={14} cursor="pointer" onClick={onClickMinus} />
      <Quantity>{quantities[idProduct] || 0}</Quantity>
      <Plus width={14} height={14} cursor="pointer" onClick={onClickPlus} />
    </QuantityControl>
  );
}

export default QuantityControlComponent;
