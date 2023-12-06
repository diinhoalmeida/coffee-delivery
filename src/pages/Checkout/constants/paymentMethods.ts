import { CreditCard, Bank, Money } from "@phosphor-icons/react";

export enum TPaymentMethods {
  credit = "credit",
  debit = "debit",
  cash = "cash",
}

export interface PaymentMethod {
  icon: React.ComponentType;
  name: string;
  type: TPaymentMethods;
}

export const paymentMethods: PaymentMethod[] = [
  {
    name: "CARTÃO DE CRÉDITO",
    type: TPaymentMethods.credit,
    icon: CreditCard,
  },
  {
    name: "CARTÃO DE DÉBITO",
    type: TPaymentMethods.debit,
    icon: Bank,
  },
  {
    name: "DINHEIRO",
    type: TPaymentMethods.cash,
    icon: Money,
  },
];
