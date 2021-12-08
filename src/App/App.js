import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../components/AppRouter/AppRouter";
import Footer from "../components/Footer";
import NavbarTop from "../components/Header/Header";
import { check } from "../http/userApi";
import { changeUserRole, userIsLogin } from "../store/UserReducer";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    check()
      .then((data) => {
        dispatch(userIsLogin(true));
        dispatch(changeUserRole(data.role));
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
    <div className="min-vh-100 d-flex flex-column justify-content-between">
      <BrowserRouter>
        <NavbarTop />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
