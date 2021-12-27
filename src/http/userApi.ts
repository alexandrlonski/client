import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";
import { IUserGet } from "../types/user";
import { USER } from "../utils/constsRoles";

export async function registration(
  email: string,
  password: string,
  name: string
): Promise<IUserGet> {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    name,
    role: USER,
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
}

export async function login(
  email: string,
  password: string
): Promise<IUserGet> {
  const { data } = await $host.post("api/user/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
}

export async function checkIsLogin(): Promise<IUserGet> {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
}
