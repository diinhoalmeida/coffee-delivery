export function formatPrice(arg: number) {
  const priceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(arg);
  return priceFormatted;
}
