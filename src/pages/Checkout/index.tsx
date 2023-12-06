import { CurrencyDollar, MapPinLine, Trash } from "@phosphor-icons/react";
import {
  AddressContainer,
  AddressContainerContent,
  AddressContainerTitle,
  AddressForm,
  ButtonRemoveCoffee,
  ButtonRemoveCoffeeText,
  CheckoutContainer,
  CoffeeCard,
  CoffeeCardActions,
  CoffeeCardDetails,
  CoffeeCardName,
  CoffeeListSelected,
  CoffeeSelectedCheckout,
  CoffeeSelectedCheckoutContent,
  CoffeeSelectedCheckoutTitle,
  ConfirmBuyButton,
  ContentDescription,
  ContentDescriptionContainer,
  ContentDescriptionTitle,
  ContentDescriptionTitleContainer,
  PaymentMethodCard,
  PaymentMethodCardText,
  PaymentMethods,
  PaymentTypeContainer,
  Total,
  TotalCoffeesContainer,
  TotalCoffeesDescription,
  TotalCoffeesDetails,
  TotalCoffeesValues,
  TotalPriceByCoffee,
} from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "./components/TextInput";
import { paymentMethods } from "./constants/paymentMethods";
import { useCart } from "../../hooks/useCart";
import QuantityControlComponent from "../../components/QuantityControl";
import { useEffect, useState } from "react";
import { TQuantitites } from "../Home/components/Products";
import { formatPrice } from "../../utils/priceFormatter";
import { useCoffee } from "../../hooks/useCoffee";
import { TCoffeeType } from "../../reducers/cart/reducer";

export interface FormInputs {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: TPaymentMethods | undefined;
}

enum TPaymentMethods {
  "credit",
  "debit",
  "cash",
}

const newOrder = z.object({
  cep: z.number({ invalid_type_error: "Informe o CEP" }),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  state: z.string().min(1, "Informe a UF"),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export type OrderInfo = z.infer<typeof newOrder>;

function Checkout() {
  const { coffeeList, removeCoffee, handleCheckout } = useCart();
  const [typePayment, setTypePayment] = useState<TPaymentMethods | undefined>();
  const [quantities, setQuantities] = useState<TQuantitites>(
    {} as TQuantitites
  );
  const { addNewCoffee } = useCoffee();

  const shippingPrice = 3.5;

  const totalItemsPrice = coffeeList?.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity);
  }, 0);

  useEffect(() => {
    const quantities: TQuantitites = coffeeList.reduce((acc, coffee) => {
      acc[coffee.id] = coffee.quantity;
      return acc;
    }, {} as TQuantitites); // explicitly specify {} as TQuantitites

    setQuantities(quantities);
  }, [coffeeList]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  });

  const handleClick = (paymentMethod: TPaymentMethods) => {
    setTypePayment(paymentMethod); // Define o valor no React Hook Form
  };

  const handleAddCoffee = (
    coffeeData: TCoffeeType,
    updatedQuantities: TQuantitites
  ) => {
    const coffeeId = coffeeData.id;

    addNewCoffee({
      coffeeData: {
        ...coffeeData,
        quantity: updatedQuantities[coffeeId] || 0,
      },
      quantity: updatedQuantities[coffeeId] || 0,
    });
  };

  const handleClickMinus = (item: TCoffeeType) => {
    const updatedQuantities = {
      ...quantities,
      [item.id]: Math.max((quantities[item.id] || 0) - 1, 1),
    };
    setQuantities(updatedQuantities);
    handleAddCoffee(item, updatedQuantities);
  };

  const handleClickPlus = (item: TCoffeeType) => {
    const updatedQuantities = {
      ...quantities,
      [item.id]: (quantities[item.id] || 0) + 1,
    };
    setQuantities(updatedQuantities);
    handleAddCoffee(item, updatedQuantities);
  };

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    const updatedData: FormInputs = {
      ...data,
      paymentMethod: typePayment, // Adiciona typePayment ao objeto data
    };
    handleCheckout(updatedData);
    if (coffeeList.length === 0) {
      return alert("É preciso ter pelo menos um item no carrinho");
    }
  };

  return (
    <>
      <CheckoutContainer>
        <AddressContainer>
          <AddressContainerTitle>Complete seu pedido</AddressContainerTitle>
          <AddressContainerContent>
            <ContentDescriptionContainer>
              <MapPinLine height={22} width={22} />
              <ContentDescriptionTitleContainer>
                <ContentDescriptionTitle>
                  Endereço de Entrega
                </ContentDescriptionTitle>
                <ContentDescription>
                  Informe o endereço onde deseja receber seu pedido
                </ContentDescription>
              </ContentDescriptionTitleContainer>
            </ContentDescriptionContainer>
            <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
              <AddressForm>
                <TextInput
                  placeholder="CEP"
                  type="number"
                  containerProps={{ style: { gridArea: "cep" } }}
                  error={errors.cep}
                  {...register("cep", { valueAsNumber: true })}
                />

                <TextInput
                  placeholder="Rua"
                  containerProps={{ style: { gridArea: "street" } }}
                  error={errors.street}
                  {...register("street")}
                />

                <TextInput
                  placeholder="Número"
                  containerProps={{ style: { gridArea: "number" } }}
                  error={errors.number}
                  {...register("number")}
                />

                <TextInput
                  placeholder="Complemento"
                  optional
                  containerProps={{ style: { gridArea: "fullAddress" } }}
                  error={errors.fullAddress}
                  {...register("fullAddress")}
                />

                <TextInput
                  placeholder="Bairro"
                  containerProps={{ style: { gridArea: "neighborhood" } }}
                  error={errors.neighborhood}
                  {...register("neighborhood")}
                />

                <TextInput
                  placeholder="Cidade"
                  containerProps={{ style: { gridArea: "city" } }}
                  error={errors.city}
                  {...register("city")}
                />

                <TextInput
                  placeholder="UF"
                  maxLength={2}
                  containerProps={{ style: { gridArea: "state" } }}
                  error={errors.state}
                  {...register("state")}
                />
              </AddressForm>
            </form>
          </AddressContainerContent>
          <PaymentTypeContainer>
            <ContentDescriptionContainer>
              <CurrencyDollar height={22} width={22} />
              <ContentDescriptionTitleContainer>
                <ContentDescriptionTitle>Pagamento</ContentDescriptionTitle>
                <ContentDescription>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </ContentDescription>
              </ContentDescriptionTitleContainer>
            </ContentDescriptionContainer>
            <PaymentMethods>
              {paymentMethods.map(({ icon: Icon, name, type }, index) => (
                <PaymentMethodCard
                  key={index}
                  {...register("paymentMethod")}
                  value={type}
                  isSelected={
                    typeof typePayment === "string" && typePayment === type
                  }
                  onClick={() => handleClick(type)}
                >
                  <Icon />
                  <PaymentMethodCardText>{name}</PaymentMethodCardText>
                </PaymentMethodCard>
              ))}
            </PaymentMethods>
          </PaymentTypeContainer>
        </AddressContainer>
        <CoffeeSelectedCheckout>
          <CoffeeSelectedCheckoutTitle>
            Cafés selecionados
          </CoffeeSelectedCheckoutTitle>
          <CoffeeSelectedCheckoutContent>
            <CoffeeListSelected>
              {coffeeList?.map((item, index) => (
                <CoffeeCard key={index}>
                  <img
                    src={item.image}
                    alt={item.description}
                    width={64}
                    height={64}
                  />
                  <CoffeeCardDetails>
                    <CoffeeCardName>{item.name}</CoffeeCardName>
                    <CoffeeCardActions>
                      <QuantityControlComponent
                        quantities={quantities}
                        idProduct={item.id}
                        onClickMinus={() => handleClickMinus(item)}
                        onClickPlus={() => handleClickPlus(item)}
                      />
                      <ButtonRemoveCoffee
                        onClick={() => removeCoffee({ coffeeId: item.id })}
                      >
                        <Trash width={16} height={16} />
                        <ButtonRemoveCoffeeText>REMOVE</ButtonRemoveCoffeeText>
                      </ButtonRemoveCoffee>
                    </CoffeeCardActions>
                  </CoffeeCardDetails>
                  <TotalPriceByCoffee>
                    {formatPrice(item.price * item.quantity)}
                  </TotalPriceByCoffee>
                </CoffeeCard>
              ))}
            </CoffeeListSelected>
            <TotalCoffeesContainer>
              <TotalCoffeesDetails>
                <TotalCoffeesDescription>
                  Total de itens
                </TotalCoffeesDescription>

                <TotalCoffeesValues>
                  {formatPrice(Number(totalItemsPrice))}
                </TotalCoffeesValues>
              </TotalCoffeesDetails>
              <TotalCoffeesDetails>
                <TotalCoffeesDescription>Entrega</TotalCoffeesDescription>
                <TotalCoffeesValues>
                  {formatPrice(shippingPrice)}
                </TotalCoffeesValues>
              </TotalCoffeesDetails>
              <TotalCoffeesDetails>
                <Total>Total</Total>
                <Total>{formatPrice(totalItemsPrice + shippingPrice)}</Total>
              </TotalCoffeesDetails>
              <ConfirmBuyButton type="submit" form="order">
                CONFIRMAR PEDIDO
              </ConfirmBuyButton>
            </TotalCoffeesContainer>
          </CoffeeSelectedCheckoutContent>
        </CoffeeSelectedCheckout>
      </CheckoutContainer>
    </>
  );
}

export default Checkout;
