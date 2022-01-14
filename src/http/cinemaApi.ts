import { $authHost, $host } from "./index";
import { ICinema, IFetchCinema } from "../types/cinema";

export async function createCinemaReq(cinema: FormData): Promise<ICinema> {
  const data: ICinema = await (await $authHost.post("api/cinema", cinema)).data;
  return data;
}

export async function updateCinemaReq(
  id: number,
  cinema: FormData
): Promise<ICinema> {
  const data: ICinema = await (
    await $authHost.put("api/cinema/" + id, cinema)
  ).data;
  return data;
}

export async function getCinemasReq(): Promise<IFetchCinema> {
  const data: IFetchCinema = await (await $host.get("api/cinema")).data;
  return data;
}

export async function deleteCinemaReq(id: number | null): Promise<ICinema> {
  await $authHost.delete("api/cinema/" + id);
  const data: ICinema = await (await $host.get("api/cinema")).data;
  return data;
}
