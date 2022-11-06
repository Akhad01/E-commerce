import { ReactComponent as Icon1 } from "../assets/icon1.svg";
import { ReactComponent as Icon2 } from "../assets/icon2.svg";
import { ReactComponent as Icon3 } from "../assets/icon3.svg";
import { ReactComponent as Icon4 } from "../assets/icon4.svg";
import { ReactComponent as Icon5 } from "../assets/icon5.svg";

export const lists = [
  {
    title: "Главная",
    img: <Icon1 className="sidebar__icon" />,
    id: "icon1",
  },
  {
    title: "Заказы",
    img: <Icon2 className="sidebar__icon" />,
    id: "icon2",
  },
  {
    title: "Товары",
    img: <Icon3 className="sidebar__icon" />,
    id: "icon3",
  },
  {
    title: "Отзывы",
    img: <Icon4 className="sidebar__icon" />,
    id: "icon4",
  },
  {
    title: "Оформить заказ",
    img: <Icon5 className="sidebar__icon" />,
    id: "icon5",
  },
];
