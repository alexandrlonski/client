import AboutFilm from "./pages/AboutFilm";
import AboutUS from "./pages/AboutUS";
import Admin from "./pages/Admin";
import Basket from "./pages/BasketPage";
import Films from "./pages/Films";
import LogInPage from "./pages/LogInPage";
import RegistrationPage from "./pages/RegistrationPage";
import { ABOUTFILM_ROUTE, ABOUTUS_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, FILMS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

export const authRoutes = [
 {
  path: ADMIN_ROUTE,
  Component: Admin
 },
 {
  path: BASKET_ROUTE,
  Component: Basket
 }
]

export const publicRoutes = [
  {
   path: FILMS_ROUTE ,
   Component: Films
  },
  {
   path: ABOUTFILM_ROUTE,
   Component: AboutFilm
  },
  {
   path: REGISTRATION_ROUTE,
   Component: RegistrationPage
  },
  {
   path: LOGIN_ROUTE,
   Component: LogInPage
  },
  {
   path: ABOUTUS_ROUTE,
   Component: AboutUS
  },
  {
   path: '/*',
   Component: AboutUS
  },
 
]