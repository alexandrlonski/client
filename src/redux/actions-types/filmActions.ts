export interface IChangeFilmAction {
  readonly type: "CHANGE_ID";
  payload: number;
}

export type FilmActions = IChangeFilmAction;
