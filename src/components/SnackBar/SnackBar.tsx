import React, { useEffect } from "react";
import { VariantType, useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducer/rootReducer";
import { FILMCREATED, FILMDELETED } from "../../utils/constsSuccess";
import { changeTextModal } from "../../redux/action-creators/modal";

const SnackBar = () => {
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
  }, [message, dispatch, handleClickVariant]);
  return <React.Fragment></React.Fragment>;
};

export default SnackBar;
