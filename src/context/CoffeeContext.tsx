import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";
import { TCoffeeType, coffeeReducer } from "../reducers/cart/reducer";
import {
  addCoffeeAction,
  removeAllCoffeesAction,
  removeCoffeeAction,
} from "../reducers/cart/actions";
import { FormInputs } from "../pages/Checkout";
export const CoffeeContext = createContext({} as ICoffeesContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

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

interface IAddNewCoffee {
  coffeeData: TCoffeeType;
  quantity: number;
}

interface IRemoveCoffee {
  coffeeId: number;
}

export interface ICoffeesContextType {
  coffeeList: TCoffeeType[];
  coffeeQuantity: number;
  handleCheckout: (data: FormInputs) => void;
  addNewCoffee: ({ coffeeData, quantity }: IAddNewCoffee) => void;
  removeCoffee: ({ coffeeId }: IRemoveCoffee) => void;
}

export const COFFEES_STATE_STORAGE_KEY =
  "@coffee-delivery:coffess-cart-state-1.0.0";
export const ADDRESS_CONSUMER = "@coffee-delivery:address-consumer-state-1.0.0";

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState<number>(0);
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

  const sumCoffeeQuantity = useCallback(() => {
    const totalQuantity = coffeeList.reduce(
      (sum, coffee) => sum + (coffee.quantity || 0),
      0
    );
    setCoffeeQuantity(totalQuantity);
  }, [coffeeList]);

  useEffect(() => {
    if (coffeeList.length > 0) {
      sumCoffeeQuantity();
    }
  }, [coffeeList, sumCoffeeQuantity]);

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

  function handleCheckout(data: FormInputs) {
    localStorage.setItem(ADDRESS_CONSUMER, JSON.stringify(data));
    dispatch(removeAllCoffeesAction());
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        coffeeQuantity,
        handleCheckout,
        addNewCoffee,
        removeCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
