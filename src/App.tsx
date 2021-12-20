import { FC, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { checkUser } from "./redux/asyncActions/user";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import UniversalModal from "./components/Modal";
import AppRouter from "../src/components/AppRouter";
import Footer from "./components/Footer";
import "./App.scss";

const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  });

  return (
    <BrowserRouter>
      <div className="d-flex flex-column justify-content-between min-vh-100">
        <Header />
        <UniversalModal />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
