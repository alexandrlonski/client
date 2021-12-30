import { FC, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { checkUser } from "./redux/async-actions/user";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import ErrorModal from "./components/ErrorModal";
import LogoutModal from "./components/LogoutModal";
import AppRouter from "../src/components/AppRouter";
import Footer from "./components/Footer";
import "./App.scss";
import { SnackbarProvider } from "notistack";
import SnackBar from "./components/SnackBar/SnackBar";

const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <SnackbarProvider>
        <div className="d-flex flex-column justify-content-between min-vh-100">
          <Header />
          <ErrorModal />
          <LogoutModal />
          <AppRouter />
          <SnackBar />
          <Footer />
        </div>
      </SnackbarProvider>
    </BrowserRouter>
  );
};

export default App;
