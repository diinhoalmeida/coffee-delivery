import TraditionalEspressoImage from "../../../assets/coffee-types/Type=Expresso.png";
import AmericanoImage from "../../../assets/coffee-types/Type=Americano.png";
import CreamyEspressoImage from "../../../assets/coffee-types/Type=Expresso Cremoso.png";
import IcedEspressoImage from "../../../assets/coffee-types/Type=Café Gelado.png";
import CoffeeWithMilkImage from "../../../assets/coffee-types/Type=Café com Leite.png";
import LatteImage from "../../../assets/coffee-types/Type=Latte.png";
import CappuccinoImage from "../../../assets/coffee-types/Type=Capuccino.png";
import MacchiatoImage from "../../../assets/coffee-types/Type=Macchiato.png";
import MochaccinoImage from "../../../assets/coffee-types/Type=Mochaccino.png";
import HotChocolateImage from "../../../assets/coffee-types/Type=Chocolate Quente.png";
import CubanoImage from "../../../assets/coffee-types/Type=Cubano.png";
import HawaiianImage from "../../../assets/coffee-types/Type=Havaiano.png";
import ArabicImage from "../../../assets/coffee-types/Type=Árabe.png";
import IrishImage from "../../../assets/coffee-types/Type=Irlandês.png";

export const coffees = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos.",
    label: ["Tradicional"],
    price: 9.9,
    image: TraditionalEspressoImage,
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional.",
    label: ["Tradicional"],
    price: 9.9,
    image: AmericanoImage,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café express tradicional com espuma cremosa.",
    label: ["Tradicional"],
    price: 9.9,
    image: CreamyEspressoImage,
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo.",
    label: ["Tradicional", "Gelado"],
    price: 9.9,
    image: IcedEspressoImage,
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado.",
    label: ["Tradicional", "Com Leite"],
    price: 9.9,
    image: CoffeeWithMilkImage,
  },
  {
    id: 6,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa.",
    label: ["Tradicional", "Com Leite"],
    price: 9.9,
    image: LatteImage,
  },
  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma.",
    label: ["Tradicional", "Com Leite"],
    price: 9.9,
    image: CappuccinoImage,
  },
  {
    id: 8,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma.",
    label: ["Tradicional", "Com Leite"],
    price: 9.9,
    image: MacchiatoImage,
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma.",
    label: ["Tradicional", "Com Leite"],
    price: 9.9,
    image: MochaccinoImage,
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description:
      "Bebida feita com chocolate dissolvido no leite quente e café.",
    label: ["Tradicional", "Com Leite"],
    price: 9.9,
    image: HotChocolateImage,
  },
  {
    id: 11,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã.",
    label: ["Especial", "Alcoólico", "Gelado"],
    price: 9.9,
    image: CubanoImage,
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco.",
    label: ["Especial"],
    price: 9.9,
    image: HawaiianImage,
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias.",
    label: ["Especial"],
    price: 9.9,
    image: ArabicImage,
  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês e açucar e chantily.",
    label: ["Especial", "Alcoólico"],
    price: 9.9,
    image: IrishImage,
  },
];
