import { FC, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { checkUser } from "./redux/async-actions/user";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/User/Header";
import AdminHeader from "./components/Admin/AdminHeader";
import ErrorModal from "./components/Common/ErrorModal";
import LogoutModal from "./components/Common/LogoutModal";
import DeleteFilmModal from "./components/Admin/DeleteModal";
import AppRouter from "../src/components/Common/AppRouter";
import Footer from "./components/User/Footer";
import "./App.scss";
import { SnackbarProvider } from "notistack";
import SnackBar from "./components/Common/SnackBar";
import { RootState } from "./redux/reducer/rootReducer";
import { ADMIN } from "./utils/constsRoles";

const App: FC = () => {
  const { role } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <BrowserRouter>
      <SnackbarProvider>
        <div
          className={
            role !== ADMIN
              ? "d-flex flex-column justify-content-between min-vh-100 "
              : "d-flex flex-column justify-content-start min-vh-100 "
          }>
          {role !== ADMIN ? <Header /> : <AdminHeader />}
          <ErrorModal />
          <LogoutModal />
          <DeleteFilmModal />
          <AppRouter />
          <SnackBar />
          {role !== ADMIN && <Footer />}
        </div>
      </SnackbarProvider>
    </BrowserRouter>
  );
};

export default App;
