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
import { showFilms } from "./redux/async-actions/film";

const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
    dispatch(showFilms());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column justify-content-between min-vh-100">
        <Header />
        <ErrorModal />
        <LogoutModal />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
