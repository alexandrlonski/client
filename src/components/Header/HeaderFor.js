import { ABOUTUS_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, FILMS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts"

export const initHeader = [
 {
  id:1,
  name:"Poster",
  route: FILMS_ROUTE
 },
 {
  id:2,
  name: "Cinemas",
  route: ABOUTUS_ROUTE
 },
 {
  id:3,
  name: "LogIn",
  route: LOGIN_ROUTE
 },
 {
  id:4,
  name: "Registration",
  route: REGISTRATION_ROUTE
 }
]
export const adminHeader = [
 {
  id:1,
  name:"AdminPanel",
  route: ADMIN_ROUTE
 },
 {
  id:2,
  name:"Poster",
  route: FILMS_ROUTE
 },
 {
  id:3,
  name: "Cinemas",
  route: ABOUTUS_ROUTE
 },
 {
  id:4,
  name: "LogOut",
  route: "/"
 },


]
export const userHeader = [
 {
  id:1,
  name:"Basket",
  route: BASKET_ROUTE
 },
 {
  id:2,
  name:"Poster",
  route: FILMS_ROUTE
 },
 {
  id:3,
  name: "Cinemas",
  route: ABOUTUS_ROUTE
 },
 {
  id:4,
  name: "LogOut",
  route: '/'
 },
]