import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { toggleShowErrorModal } from "../../../redux/action-creators/modal";
import { RootState } from "../../../redux/reducer/rootReducer";
import { IToggleErrorShowModal } from "../../../types/modal";

const ErrorModal: FC = () => {
  const dispatch = useDispatch();
  const handleClose = (): IToggleErrorShowModal =>
    dispatch(toggleShowErrorModal(false));
  const { errorModalShow, text } = useSelector(
    (state: RootState) => state.modal
  );

  return (
    <Modal
      className="w-40"
      show={errorModalShow}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-center">{text}</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
