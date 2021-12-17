import { FC } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import { adminRoutes, authRoutes, publicRoutes } from "../../routes";
import { RootState } from "../../redux/reducer/rootReducer";
import { ADMIN_ROUTE, FILMS_ROUTE } from "../../utils/constsRoutes";
import "./AppRouter.scss";

const AppRouter: FC = () => {
  const { isAuth, role } = useSelector((state: RootState) => state.user);

  return (
    <Container className="router-container">
      <Routes>
        {isAuth && !(role === "ADMIN")
          ? authRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))
          : null}
        {role === "ADMIN" &&
          adminRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        {!isAuth && !(role === "ADMIN")
          ? publicRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))
          : null}
        <Route
          path="*"
          element={
            <Navigate
              replace
              to={!(role === "ADMIN") ? FILMS_ROUTE : ADMIN_ROUTE}
            />
          }
        />
      </Routes>
    </Container>
  );
};

export default AppRouter;
