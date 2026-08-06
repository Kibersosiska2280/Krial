import furnitureKitchenImg from "@/assets/furniture-kitchen.jpg";
import furnitureWardrobeImg from "@/assets/furniture-wardrobe.jpg";
import furnitureDressingImg from "@/assets/furniture-dressing.jpg";
import furnitureOfficeImg from "@/assets/furniture-office.jpg";
import furnitureHotelImg from "@/assets/furniture-hotel.jpg";
import furnitureTradeImg from "@/assets/furniture-trade.jpg";
import furnitureKidsImg from "@/assets/furniture-kids.jpg";
import furnitureHallwayImg from "@/assets/furniture-hallway.jpg";

export interface FurnitureType {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const furnitureTypes: FurnitureType[] = [
  {
    id: "1",
    name: "Кухни",
    image: furnitureKitchenImg,
    description: "Кухонные гарнитуры любой сложности"
  },
  {
    id: "2", 
    name: "Шкафы-купе",
    image: furnitureWardrobeImg,
    description: "Встроенные и корпусные шкафы"
  },
  {
    id: "3",
    name: "Гардеробные",
    image: furnitureDressingImg,
    description: "Полноценные гардеробные комнаты"
  },
  {
    id: "4",
    name: "Офисная мебель",
    image: furnitureOfficeImg,
    description: "Столы, стеллажи, тумбы для офиса"
  },
  {
    id: "5",
    name: "Мебель для гостиниц",
    image: furnitureHotelImg,
    description: "Комплекты для номеров отелей"
  },
  {
    id: "6",
    name: "Торговое оборудование",
    image: furnitureTradeImg,
    description: "Витрины, стеллажи, прилавки"
  },
  {
    id: "7",
    name: "Детские комнаты",
    image: furnitureKidsImg,
    description: "Безопасная мебель для детей"
  },
  {
    id: "8",
    name: "Прихожие",
    image: furnitureHallwayImg,
    description: "Функциональные решения для прихожих"
  }
];

export const priceListItems = [
  { name: "Кухня (погонный метр)", price: "от 25 000 ₽" },
  { name: "Шкаф-купе (кв.м. фасада)", price: "от 8 000 ₽" },
  { name: "Гардеробная (кв.м.)", price: "от 12 000 ₽" },
  { name: "Офисный стол", price: "от 15 000 ₽" },
  { name: "Стеллаж", price: "от 7 000 ₽" },
  { name: "Комод", price: "от 18 000 ₽" },
  { name: "Тумба прикроватная", price: "от 5 000 ₽" },
  { name: "Торговая витрина", price: "от 20 000 ₽" },
];

export const advantages = [
  "Собственное производство в России",
  "Работаем с 2010 года",
  "Более 5000 выполненных проектов",
  "Гарантия качества 3 года",
  "Бесплатный замер и доставка",
  "Работаем по всей России"
];

export const controlSteps = [
  {
    title: "Входной контроль материалов",
    description: "Проверка качества ЛДСП, фурнитуры и комплектующих"
  },
  {
    title: "Контроль раскроя",
    description: "Точность раскроя до 0.1 мм на станках с ЧПУ"
  },
  {
    title: "Контроль кромления",
    description: "Проверка качества кромки и её прилегания"
  },
  {
    title: "Контроль присадки",
    description: "Точность отверстий для фурнитуры"
  },
  {
    title: "Финальная проверка",
    description: "Комплектность и качество упаковки"
  }
];