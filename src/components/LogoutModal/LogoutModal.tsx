import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { toggleShowLogoutModal } from "../../redux/action-creators/modal";
import { RootState } from "../../redux/reducer/rootReducer";
import { userLogout } from "../../redux/action-creators/user";
import { IToggleLogoutShowModal } from "../../types/modal";

const LogoutModal: FC = () => {
  const dispatch = useDispatch();
  const handleClose = (): IToggleLogoutShowModal =>
    dispatch(toggleShowLogoutModal(false));
  const handleState = (): void => {
    localStorage.clear();
    dispatch(userLogout());
    dispatch(toggleShowLogoutModal(false));
  };
  const { logoutModalShow } = useSelector((state: RootState) => state.modal);

  return (
    <Modal
      className="w-40"
      show={logoutModalShow}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-center">
          Do you really want to leave?
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

export default LogoutModal;
