import { FC } from "react";
import { IAdminFilmBtn } from "../../../types/props";

const AdminFilmBtn: FC<IAdminFilmBtn> = (props) => {
  return (
    <div className="d-flex justify-content-between">
      <button className="link button">update</button>
      <button className="link button" onClick={props.delete}>
        delete
      </button>
    </div>
  );
};

export default AdminFilmBtn;
