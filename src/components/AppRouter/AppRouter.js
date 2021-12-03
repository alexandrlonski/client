import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../routes";
import { isAuth } from "../../data/Data";

const AppRouter = () => {
  return (
    <Container style={{ padding: "40px 10px" }}>
      <Routes>
        {isAuth &&
          authRoutes.map(({ path, Component }) => (
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
