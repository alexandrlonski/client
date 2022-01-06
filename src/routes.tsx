import AboutFilm from "./pages/User/AboutFilm";
import AboutUS from "./pages/User/AboutUS";
import AdminOffice from "./pages/Admin/OfficePage";
import LoginP from "./pages/User/Login";
import UserOffice from "./pages/User/OfficePage";
import Films from "./pages/Common/Films";
import FilmPreview from "./pages/Admin/FilmPreview";
import BuyTicket from "./pages/User/BuyTicket";
import AddFilmPage from "./pages/Admin/AddFilmPage";
import AddCinemaPage from "./pages/Admin/AddCinemaPage";
import { IPath } from "./types/types";
import {
  ABOUTUS_ROUTE,
  USER_OFFICE_ROUTE,
  ADMIN_OFFICE_ROUTE,
  BUY_TICKET,
  FILMS_ROUTE,
  FILM_PREVIEW,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ADD_FILM,
  ADD_CINEMA,
} from "./utils/constsRoutes";
import Register from "./pages/User/Register";

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
    path: USER_OFFICE_ROUTE,
    Component: UserOffice,
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
    path: ADMIN_OFFICE_ROUTE,
    Component: AdminOffice,
  },
  {
    path: FILMS_ROUTE,
    Component: Films,
  },
  {
    path: FILM_PREVIEW,
    Component: FilmPreview,
  },
  {
    path: FILMS_ROUTE + "/:id",
    Component: AboutFilm,
    exact: true,
  },
  {
    path: ADD_FILM,
    Component: AddFilmPage,
  },
  {
    path: ADD_CINEMA,
    Component: AddCinemaPage,
  },
  {
    path: ABOUTUS_ROUTE,
    Component: AboutUS,
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
