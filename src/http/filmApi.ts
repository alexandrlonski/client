import { $authHost, $host } from "./index";
import { IFetchFilms, IFilm } from "../types/film";

export async function createFilmReq(film: FormData): Promise<IFilm> {
  const data: IFilm = await (await $authHost.post("api/film", film)).data;
  return data;
}

export async function fetchFilms(
  page: number,
  limit = 5
): Promise<IFetchFilms> {
  const { data } = await $host.get("api/film", { params: { page, limit } });
  return data;
}

export async function fetchFilm(id: string): Promise<IFilm> {
  const { data } = await $host.get("api/film/" + id);
  return data;
}
