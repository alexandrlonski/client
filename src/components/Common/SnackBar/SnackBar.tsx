import React, { FC, useEffect } from "react";
import { VariantType, useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/reducer/rootReducer";
import {
  CINEMA_CREATED,
  CINEMA_DELETED,
  CINEMA_UPDATED,
  FILM_CREATED,
  FILM_DELETED,
  FILM_UPDATED,
} from "../../../utils/constsSuccess";
import { changeTextModal } from "../../../redux/action-creators/modal";

const SnackBar: FC = () => {
  const message = useSelector((state: RootState) => state.modal.text);
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    enqueueSnackbar(message, { variant });
  };

  useEffect(() => {
    if (message === FILM_UPDATED) {
      handleClickVariant("success")();
      dispatch(changeTextModal(""));
    }
    if (message === CINEMA_UPDATED) {
      handleClickVariant("success")();
      dispatch(changeTextModal(""));
    }
    if (message === FILM_CREATED) {
      handleClickVariant("success")();
      dispatch(changeTextModal(""));
    }
    if (message === FILM_DELETED) {
      handleClickVariant("info")();
      dispatch(changeTextModal(""));
    }
    if (message === CINEMA_CREATED) {
      handleClickVariant("success")();
      dispatch(changeTextModal(""));
    }
    if (message === CINEMA_DELETED) {
      handleClickVariant("info")();
      dispatch(changeTextModal(""));
    }
  }, [message]);
  return <React.Fragment></React.Fragment>;
};

export default SnackBar;
