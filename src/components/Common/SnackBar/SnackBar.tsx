import React, { FC, useEffect } from "react";
import { VariantType, useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/reducer/rootReducer";
import {
  CINEMACREATED,
  FILMCREATED,
  FILMDELETED,
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
    if (message === FILMCREATED) {
      handleClickVariant("success")();
      dispatch(changeTextModal(""));
    }
    if (message === FILMDELETED) {
      handleClickVariant("info")();
      dispatch(changeTextModal(""));
    }
    if (message === CINEMACREATED) {
      handleClickVariant("success")();
      dispatch(changeTextModal(""));
    }
  }, [message]);
  return <React.Fragment></React.Fragment>;
};

export default SnackBar;
