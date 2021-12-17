import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { toggleShowModal } from "../../redux/reducer/modalReducer";
import { RootState } from "../../redux/reducer/rootReducer";
import { userLogout } from "../../redux/reducer/userReducer";
import { IHandleClose } from "../../types/types";

const UniversalModal: FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const handleClose = (): IHandleClose => dispatch(toggleShowModal(false));
  const handleState = (): void => {
    localStorage.clear();
    dispatch(userLogout());
    dispatch(toggleShowModal(false));
  };
  const { show, text } = useSelector((state: RootState) => state.modal);

  return (
    <Modal
      className="w-40"
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-center">
          {isAuth ? "Do you really want to leave?" : text}
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        {isAuth ? (
          <>
            <Button variant="secondary" onClick={handleClose}>
              NO
            </Button>
            <Button variant="primary" onClick={handleState}>
              YES
            </Button>
          </>
        ) : (
          <Button onClick={handleClose}>Close</Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default UniversalModal;
