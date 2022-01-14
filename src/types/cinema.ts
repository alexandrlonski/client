export interface ICinema {
  name: string;
  city: string;
  description: string;
  id: number;
  img: string;
}

export interface IFetchCinema {
  count: number;
  rows: ICinema[];
}

export interface IPageViewCinemas {
  count: number;
  limit: number;
  pageNumber: number;
}
