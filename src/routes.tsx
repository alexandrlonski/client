import AboutFilm from "./pages/AboutFilm";
import AboutUS from "./pages/AboutUS";
import Admin from "./pages/Admin";
import LoginP from "./pages/LoginP";
import Basket from "./pages/BasketPage";
import Films from "./pages/Films";
import BuyTicket from "./pages/BuyTicket";
import { IPath } from "./types/types";
import {
  ABOUTUS_ROUTE,
  ADMIN_ROUTE,
  BASKET_ROUTE,
  BUY_TICKET,
  FILMS_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "./utils/constsRoutes";
import Register from "./pages/Register";

export const authRoutes: IPath[] = [
  {
    path: FILMS_ROUTE,
    Component: Films,
    exact: true,
  },
  {
    path: FILMS_ROUTE + "/:id",
    Component: AboutFilm,
    exact: true,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
  {
    path: BUY_TICKET,
    Component: BuyTicket,
  },

  {
    path: ABOUTUS_ROUTE,
    Component: AboutUS,
  },
];

export const adminRoutes: IPath[] = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
    exact: true,
  },
];

export const publicRoutes: IPath[] = [
  {
    path: FILMS_ROUTE,
    Component: Films,
    exact: true,
  },
  {
    path: FILMS_ROUTE + "/:id",
    Component: AboutFilm,
    exact: true,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Register,
  },
  {
    path: LOGIN_ROUTE,
    Component: LoginP,
  },
  {
    path: ABOUTUS_ROUTE,
    Component: AboutUS,
  },
];
