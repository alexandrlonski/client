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
import { changeFilmsCount } from "../../../redux/action-creators/film";
import { CINEMA_DELETED, FILM_DELETED } from "../../../utils/constsSuccess";
import { deleteCinema, getCinemas } from "../../../redux/async-actions/cinema";
import { useParams } from "react-router-dom";
import { ADMIN_CINEMAS } from "../../../utils/constsRoutes";
import { changeCinemasCount } from "../../../redux/action-creators/cinema";

const DeleteModal: FC = () => {
  const path = window.location.pathname;
  const countFilms = useSelector(
    (state: RootState) => state.filmsPageView.count
  );
  const countCinemas = useSelector(
    (state: RootState) => state.cinemasPageView.count
  );
  const filmId = useSelector((state: RootState) => state.film.id);
  const cinemaId = useSelector((state: RootState) => state.cinema.id);

  const dispatch = useDispatch();
  const handleClose = (): IToggleDeleteFilmShowModal =>
    dispatch(toggleShowDeleteFilmModal(false));
  const handleStateFilms = (): void => {
    dispatch(deleteFilm(filmId));
    dispatch(changeFilmsCount(countFilms - 1));
    dispatch(toggleShowDeleteFilmModal(false));
    dispatch(changeTextModal(FILM_DELETED));
  };
  const handleStateCinema = (): void => {
    dispatch(deleteCinema(cinemaId));
    dispatch(changeCinemasCount(countCinemas - 1));
    dispatch(toggleShowDeleteFilmModal(false));
    dispatch(changeTextModal(CINEMA_DELETED));
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
          Do you really want to delete this{" "}
          {path === ADMIN_CINEMAS ? "cinema" : "film"}?
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          NO
        </Button>
        <Button
          variant="primary"
          onClick={
            path === ADMIN_CINEMAS ? handleStateCinema : handleStateFilms
          }>
          YES
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
