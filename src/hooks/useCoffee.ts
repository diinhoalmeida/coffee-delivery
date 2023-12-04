import { useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";

export function useCoffee() {
  const context = useContext(CoffeeContext);

  return context;
}
