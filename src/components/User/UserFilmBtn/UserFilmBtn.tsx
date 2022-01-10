import { FC } from "react";
import { IUserFilmBtn } from "../../../types/props";

const UserFilmBtn: FC<IUserFilmBtn> = (props) => {
  return (
    <div>
      <button className=" link button mb-3" onClick={props.buy}>
        Buy a ticket online
      </button>
      <button className="link button" onClick={props.read}>
        Read more
      </button>
    </div>
  );
};

export default UserFilmBtn;
