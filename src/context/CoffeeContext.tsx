import { createContext, ReactNode, useMemo, useReducer, useState } from "react";
import { TCoffeeType, coffeeReducer } from "../reducers/cart/reducer";
import { priceByState } from "../data/priceByState";
import {
  addCoffeeAction,
  removeAllCoffeesAction,
  removeCoffeeAction,
} from "../reducers/cart/actions";

export const CoffeeContext = createContext({} as ICoffeesContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

type TPaymentName = "Cartão de Crédito" | "Cartão de Débito" | "Dinheiro";

interface IAddNewCoffee {
  coffeeData: TCoffeeType;
  quantity: number;
}

interface IRemoveCoffee {
  coffeeId: number;
}

export interface ICoffeesContextProviderProps {
  children: ReactNode;
}

interface ICheckoutData {
  // address: TAddress;
  paymentMethod: TPaymentName;
  coffees: TCoffeeType[];
}

interface IHandleCheckout {
  // address: TAddress;
  paymentMethod: TPaymentName;
}

export interface ICoffeesContextType {
  coffeeList: TCoffeeType[];
  coffeeQuantity: number;
  subtotal: string;
  deliveryPrice: string;
  totalPrice: string;
  handleCheckout: ({ address, paymentMethod }: any) => void;
  addNewCoffee: ({ coffeeData, quantity }: any) => void;
  removeCoffee: ({ coffeeId }: any) => void;
}

export const COFFEES_STATE_STORAGE_KEY =
  "@coffee-delivery:coffess-cart-state-1.0.0";

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [checkoutData, setCheckoutData] = useState<ICheckoutData | null>(null);

  const [coffeesState, dispatch] = useReducer(
    coffeeReducer,
    { coffeeList: [] },
    (state) => {
      const storedStateAsJSON = localStorage.getItem(COFFEES_STATE_STORAGE_KEY);

      if (storedStateAsJSON) {
        const storedState = JSON.parse(storedStateAsJSON);

        return storedState;
      }

      return state;
    }
  );

  const { coffeeList } = coffeesState;

  const coffeeQuantity = coffeeList ? coffeeList.length : 0;

  const subtotal = useMemo(() => {
    return coffeeList.reduce((acc, coffee) => {
      const coffeePrice = coffee.price * coffee.quantity;

      return acc + coffeePrice;
    }, 0);
  }, [coffeeList]);

  const subtotalFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(subtotal);

  const deliveryPrice = priceByState.AC;

  const deliveryPriceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(deliveryPrice);

  const totalPrice = useMemo(() => {
    return subtotal + deliveryPrice;
  }, [deliveryPrice, subtotal]);

  const totalPriceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalPrice);

  function addNewCoffee({ coffeeData, quantity }: IAddNewCoffee) {
    dispatch(
      addCoffeeAction({
        newCoffee: coffeeData,
        quantity,
      })
    );

    localStorage.setItem(
      COFFEES_STATE_STORAGE_KEY,
      JSON.stringify(coffeesState)
    );
  }

  function removeCoffee({ coffeeId }: IRemoveCoffee) {
    dispatch(
      removeCoffeeAction({
        coffeeId,
      })
    );
  }

  function handleCheckout({ paymentMethod }: any) {
    let payment;

    switch (paymentMethod) {
      case "credit":
        payment = "Cartão de Crédito";
        break;
      case "debit":
        payment = "Cartão de Débito";
        break;
      default:
        payment = "Dinheiro";
        break;
    }

    // setCheckoutData({ address, paymentMethod: payment, coffees: coffeeList });

    dispatch(removeAllCoffeesAction());
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        coffeeQuantity,
        subtotal: subtotalFormatted,
        deliveryPrice: deliveryPriceFormatted,
        totalPrice: totalPriceFormatted,
        handleCheckout,
        addNewCoffee,
        removeCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
