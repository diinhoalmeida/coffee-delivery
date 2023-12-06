import { useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";

export function useCart() {
  return useContext(CoffeeContext);
}
