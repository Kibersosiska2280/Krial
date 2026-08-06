import ldspWhiteImg from "@/assets/ldsp-white.jpg";
import ldspGreyStoneImg from "@/assets/ldsp-grey-stone.jpg";
import ldspOakNaturalImg from "@/assets/ldsp-oak-natural.jpg";
import ldspConcreteLightImg from "@/assets/ldsp-concrete-light.jpg";
import ldspWalnutImg from "@/assets/ldsp-walnut.jpg";
import ldspConcreteDarkImg from "@/assets/ldsp-concrete-dark.jpg";
import ldspBardolinoImg from "@/assets/ldsp-bardolino.jpg";
import ldspCashmereImg from "@/assets/ldsp-cashmere.jpg";
import ldspSlateImg from "@/assets/ldsp-slate.jpg";

export interface LDSPProduct {
  id: string;
  name: string;
  code: string;
  color: string;
  image: string;
  thickness: string[];
  pricePerSheet: number;
  category: string;
}

export const ldspProducts: LDSPProduct[] = [
  {
    id: "1",
    name: "Белый премиум",
    code: "W1000 ST9",
    color: "#FFFFFF",
    image: ldspWhiteImg,
    thickness: ["8мм", "10мм", "16мм", "25мм"],
    pricePerSheet: 2450,
    category: "Однотонные"
  },
  {
    id: "2",
    name: "Серый камень",
    code: "F186 ST9",
    color: "#8B8B8B",
    image: ldspGreyStoneImg,
    thickness: ["16мм", "25мм"],
    pricePerSheet: 2890,
    category: "Камень"
  },
  {
    id: "3",
    name: "Дуб Галифакс натуральный",
    code: "H1180 ST37",
    color: "#C4A77D",
    image: ldspOakNaturalImg,
    thickness: ["16мм", "25мм"],
    pricePerSheet: 3200,
    category: "Дерево"
  },
  {
    id: "4",
    name: "Бетон Чикаго светло-серый",
    code: "F186 ST9",
    color: "#A9A9A9",
    image: ldspConcreteLightImg,
    thickness: ["16мм", "25мм"],
    pricePerSheet: 2950,
    category: "Бетон"
  },
  {
    id: "5",
    name: "Орех Дижон натуральный",
    code: "H3734 ST9",
    color: "#8B5A2B",
    image: ldspWalnutImg,
    thickness: ["16мм", "25мм"],
    pricePerSheet: 3400,
    category: "Дерево"
  },
  {
    id: "6",
    name: "Антрацит",
    code: "U963 ST9",
    color: "#2B2B2B",
    image: ldspConcreteDarkImg,
    thickness: ["8мм", "16мм", "25мм"],
    pricePerSheet: 2650,
    category: "Однотонные"
  },
  {
    id: "7",
    name: "Дуб Бардолино серый",
    code: "H1146 ST10",
    color: "#9E9180",
    image: ldspBardolinoImg,
    thickness: ["16мм", "25мм"],
    pricePerSheet: 3100,
    category: "Дерево"
  },
  {
    id: "8",
    name: "Мрамор Каррара белый",
    code: "F204 ST75",
    color: "#E8E8E8",
    image: ldspWhiteImg,
    thickness: ["16мм", "25мм"],
    pricePerSheet: 3500,
    category: "Камень"
  },
  {
    id: "9",
    name: "Бетон Чикаго тёмно-серый",
    code: "F187 ST9",
    color: "#5C5C5C",
    image: ldspConcreteDarkImg,
    thickness: ["16мм", "25мм"],
    pricePerSheet: 2950,
    category: "Бетон"
  },
  {
    id: "10",
    name: "Кашемир",
    code: "U702 ST9",
    color: "#F5F0E6",
    image: ldspCashmereImg,
    thickness: ["16мм", "25мм"],
    pricePerSheet: 2550,
    category: "Однотонные"
  },
  {
    id: "11",
    name: "Дуб Небраска натуральный",
    code: "H3303 ST10",
    color: "#B8976A",
    image: ldspOakNaturalImg,
    thickness: ["16мм", "25мм"],
    pricePerSheet: 3250,
    category: "Дерево"
  },
  {
    id: "12",
    name: "Сланец чёрный",
    code: "F242 ST10",
    color: "#1A1A1A",
    image: ldspSlateImg,
    thickness: ["16мм", "25мм"],
    pricePerSheet: 3300,
    category: "Камень"
  }
];

export const ldspCategories = [
  "Все",
  "Однотонные",
  "Дерево",
  "Камень",
  "Бетон"
];

export const thicknessOptions = ["8мм", "10мм", "16мм", "25мм"];

export const edgingPrices = {
  "0.4мм": 45,
  "1мм": 85,
  "2мм": 120
};