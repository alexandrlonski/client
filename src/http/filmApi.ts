import { $authHost, $host } from "./index";
import { IFilm } from "../types/film";

export async function createFilmReq(film: FormData): Promise<IFilm> {
  const data: IFilm = await (await $authHost.post("api/film", film)).data;
  return data;
}

export async function fetchFilms(): Promise<IFilm[]> {
  const { data } = await $host.get("api/film");
  return data.rows;
}

export async function fetchFilm(id: string): Promise<IFilm> {
  const { data } = await $host.get("api/film/" + id);
  return data;
}
