import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../components/AppRouter/AppRouter";
import Footer from "../components/Footer";
import NavbarTop from "../components/Header/Header";
import { check } from "../http/userApi";
import { changeUserRole, userIsLogin } from "../store/UserReducer";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          dispatch(userIsLogin(true));
          dispatch(changeUserRole(data.role));
        })
        .finally(() => setLoading(false));
    }, 1000);
  });

  if (loading) {
    return (
      <div className=" vh-100 d-flex justify-content-center align-items-center  ">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <NavbarTop />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
