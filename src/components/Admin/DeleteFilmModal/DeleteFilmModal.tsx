import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import {
  changeTextModal,
  toggleShowDeleteFilmModal,
} from "../../../redux/action-creators/modal";
import { RootState } from "../../../redux/reducer/rootReducer";
import { IToggleDeleteFilmShowModal } from "../../../types/modal";
import { deleteFilm } from "../../../redux/async-actions/film";
import { changeCount } from "../../../redux/action-creators/film";
import { FILMDELETED } from "../../../utils/constsSuccess";

const DeleteFilmModal: FC = () => {
  const { count } = useSelector((state: RootState) => state.pageView);
  const { id } = useSelector((state: RootState) => state.film);

  const dispatch = useDispatch();
  const handleClose = (): IToggleDeleteFilmShowModal =>
    dispatch(toggleShowDeleteFilmModal(false));
  const handleState = (): void => {
    dispatch(deleteFilm(id));
    dispatch(changeCount(count - 1));
    dispatch(toggleShowDeleteFilmModal(false));
    dispatch(changeTextModal(FILMDELETED));
  };
  const { deleteFilmModalShow } = useSelector(
    (state: RootState) => state.modal
  );

  return (
    <Modal
      className="w-40"
      show={deleteFilmModalShow}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-center">
          Do you really want to delete this film?
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          NO
        </Button>
        <Button variant="primary" onClick={handleState}>
          YES
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteFilmModal;
