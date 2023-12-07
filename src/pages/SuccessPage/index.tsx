import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import {
  DeliveryDetails,
  DeliveryDetailsContainer,
  SuccessPageContainer,
  SuccessPageDetails,
  SuccessPageMessage,
  SuccessPageMessageToClient,
  SuccessPageTitleMessage,
  DeliveryStrongLine,
  DeliveryDetailsTextSpace,
  DeliveryDetailsTexts,
  DeliveryDetailsIcon,
  SuccessPageDetailsImage,
} from "./styles";
import { addMinutes, differenceInMinutes } from "date-fns";
import { ADDRESS_CONSUMER } from "../../context/CoffeeContext";
import { useEffect, useState } from "react";
import Illustration from "../../assets/illustration.png";

enum TPaymentMethods {
  credit = "credit",
  debit = "debit",
  cash = "cash",
}

export interface FormInputs {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  deliveryTime?: string;
  paymentMethod: TPaymentMethods;
}

function SuccessPage() {
  const [deliveryData, setDeliveryData] = useState<FormInputs>();

  useEffect(() => {
    const dataWithDeliveryTime = getDeliveryTime();
    setDeliveryData(dataWithDeliveryTime);
  }, []);

  const getPaymentTypeName = (type: TPaymentMethods): string => {
    if (!type) return "";
    switch (type) {
      case TPaymentMethods.cash:
        return "Dinheiro";
      case TPaymentMethods.debit:
        return "Cartão de Débito";
      case TPaymentMethods.credit:
        return "Cartão de Crédito";
      default:
        throw new Error("Tipo de pagamento não reconhecido");
    }
  };

  const getDeliveryTime = () => {
    const storedData = localStorage.getItem(ADDRESS_CONSUMER);
    const parsedData = storedData ? JSON.parse(storedData) : null;

    if (!parsedData) {
      return null;
    }

    const deliveryTime = addMinutes(new Date(), 30);
    const timeDifference = differenceInMinutes(deliveryTime, new Date());

    const deliveryEstimate = `${Math.min(20, timeDifference)}min - ${Math.min(
      30,
      timeDifference
    )}min`;

    const newData = {
      ...parsedData,
      deliveryTime: deliveryEstimate,
    };

    return newData;
  };

  return (
    <SuccessPageContainer>
      <SuccessPageDetails>
        <SuccessPageMessage>
          <SuccessPageTitleMessage>
            Uhu! Pedido confirmado
          </SuccessPageTitleMessage>
          <SuccessPageMessageToClient>
            Agora é só aguardar que logo o café chegará até você
          </SuccessPageMessageToClient>
        </SuccessPageMessage>
        <DeliveryDetailsContainer>
          <DeliveryDetails>
            <DeliveryDetailsTextSpace>
              <DeliveryDetailsIcon iconColor="purple">
                <MapPin color="#ffff" weight="bold" width={16} height={16} />
              </DeliveryDetailsIcon>
              <DeliveryDetailsTexts>
                <p>
                  Entrega em{" "}
                  <DeliveryStrongLine>
                    {deliveryData?.neighborhood} - {deliveryData?.city},{" "}
                    {deliveryData?.state}
                  </DeliveryStrongLine>
                </p>
              </DeliveryDetailsTexts>
            </DeliveryDetailsTextSpace>
            <DeliveryDetailsTextSpace>
              <DeliveryDetailsIcon iconColor="yellow">
                <Timer color="#ffff" weight="bold" />
              </DeliveryDetailsIcon>
              <DeliveryDetailsTexts>
                <p>Previsão de entrega</p>
                <DeliveryStrongLine>
                  {deliveryData?.deliveryTime}
                </DeliveryStrongLine>
              </DeliveryDetailsTexts>
            </DeliveryDetailsTextSpace>
            <DeliveryDetailsTextSpace>
              <DeliveryDetailsIcon iconColor="yellowDark">
                <CurrencyDollar color="#ffff" weight="bold" />
              </DeliveryDetailsIcon>
              <DeliveryDetailsTexts>
                <p>Pagamento na entrega</p>
                <DeliveryStrongLine>
                  {getPaymentTypeName(
                    deliveryData?.paymentMethod as TPaymentMethods
                  )}
                </DeliveryStrongLine>
              </DeliveryDetailsTexts>
            </DeliveryDetailsTextSpace>
          </DeliveryDetails>
        </DeliveryDetailsContainer>
      </SuccessPageDetails>
      <SuccessPageDetailsImage
        src={Illustration}
        alt="homem de moto acelerando com uma entrega enquanto passa por um arbusto verde"
      />
    </SuccessPageContainer>
  );
}

export default SuccessPage;
