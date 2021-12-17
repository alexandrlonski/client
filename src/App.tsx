import { FC, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UniversalModal from "./components/Modal/Modal";
import "./App.scss";
import AppRouter from "../src/components/AppRouter";
import { useDispatch } from "react-redux";
import { check } from "./http/userApi";
import { changeUserRole, userIsLogin } from "./redux/reducer/userReducer";
import { Spinner } from "react-bootstrap";
import { IUserGet } from "./types/user";
import { changeFilm } from "./redux/reducer/filmReducer";

const App: FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    check()
      .then((data: IUserGet) => {
        dispatch(userIsLogin(true));
        dispatch(changeUserRole(data.role));
        dispatch(changeFilm(Number(localStorage.getItem("filmId"))));
      })
      .finally(() => setLoading(false));
  });

  if (loading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Header />
      <UniversalModal />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
