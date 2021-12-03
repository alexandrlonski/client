import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { adminRoutes, authRoutes, publicRoutes } from "../../routes";
import { useSelector } from "react-redux";
import { logDOM } from "@testing-library/react";

const AppRouter = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const role = useSelector((state) => state.user.role);
  console.log(role);
  return (
    <Container style={{ padding: "40px 10px" }}>
      <Routes>
        {isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} exact />
          ))}
        {role === "ADMIN" &&
          adminRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} exact />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      </Routes>
    </Container>
  );
};

export default AppRouter;
