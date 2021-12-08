import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { adminRoutes, authRoutes, publicRoutes } from "../../routes";
import { useSelector } from "react-redux";
import "./AppRouter.scss";

const AppRouter = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const role = useSelector((state) => state.user.role);
  return (
    <Container className="router-container">
      <Routes>
        {isAuth && !(role === "ADMIN")
          ? authRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} exact />
            ))
          : null}
        {role === "ADMIN" &&
          adminRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} exact />
          ))}
        {!isAuth && !(role === "ADMIN")
          ? publicRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} exact />
            ))
          : null}
      </Routes>
    </Container>
  );
};

export default AppRouter;
