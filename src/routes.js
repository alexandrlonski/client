import AboutFilm from "./pages/AboutFilm";
import AboutUS from "./pages/AboutUS";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/BasketPage";
import Films from "./pages/Films";
import {
  ABOUTUS_ROUTE,
  ADMIN_ROUTE,
  BASKET_ROUTE,
  FILMS_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: FILMS_ROUTE,
    Component: Films,
  },
  {
    path: FILMS_ROUTE + "/:id",
    Component: AboutFilm,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
  {
    path: "/*",
    Component: AboutUS,
  },
  {
    path: ABOUTUS_ROUTE,
    Component: AboutUS,
  },
];

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: "/*",
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: FILMS_ROUTE,
    Component: Films,
  },
  {
    path: FILMS_ROUTE + "/:id",
    Component: AboutFilm,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: ABOUTUS_ROUTE,
    Component: AboutUS,
  },
  {
    path: "/*",
    Component: AboutUS,
  },
];
