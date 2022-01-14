import { $authHost, $host } from "./index";
import { IFetchFilms, IFilm } from "../types/film";

export async function createFilmReq(film: FormData): Promise<IFilm> {
  const data: IFilm = await (await $authHost.post("api/film", film)).data;
  return data;
}

export async function updateFilmReq(
  id: number,
  film: FormData
): Promise<IFilm> {
  const data: IFilm = await (await $authHost.put("api/film/" + id, film)).data;
  return data;
}

export async function getFilmsReq(
  page: number,
  limit = 5
): Promise<IFetchFilms> {
  const { data } = await $host.get("api/film", { params: { page, limit } });
  return data;
}

export async function getFilmReq(id: number): Promise<IFilm> {
  const { data } = await $host.get("api/film/" + id);
  return data;
}

export async function deleteFilmReq(id: number | null): Promise<IFilm> {
  await $authHost.delete("api/film/" + id);
  const { data } = await $host.get("api/film");
  return data;
}
