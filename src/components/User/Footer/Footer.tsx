import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ABOUTUS_ROUTE } from "../../../utils/constsRoutes";
import "./Footer.scss";

const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <div className="footer-heading">Poster</div>
            <NavLink className="footer-link" to={ABOUTUS_ROUTE}>
              Now in cinema
            </NavLink>
            <NavLink className="footer-link" to={ABOUTUS_ROUTE}>
              Soon
            </NavLink>
          </div>
          <div className="footer-column">
            <div className="footer-heading">Our cinemas</div>
            <NavLink className="footer-link" to={ABOUTUS_ROUTE}>
              VOKA CINEMA by Silver Screen in "Dana Mall"
            </NavLink>
            <NavLink className="footer-link" to={ABOUTUS_ROUTE}>
              Silver Screen cinemas in "ArenaCity"
            </NavLink>
          </div>
          <div className="footer-column">
            <div className="footer-heading">Info</div>
            <NavLink className="footer-link" to={ABOUTUS_ROUTE}>
              Promotions
            </NavLink>
            <NavLink className="footer-link" to={ABOUTUS_ROUTE}>
              News
            </NavLink>
            <NavLink className="footer-link" to={ABOUTUS_ROUTE}>
              Visiting rules
            </NavLink>
            <NavLink className="footer-link" to={ABOUTUS_ROUTE}>
              Advertizement
            </NavLink>
          </div>
          <div className="footer-column">
            <div className="footer-heading">Social Media</div>
            <NavLink className="footer-link" to={ABOUTUS_ROUTE}>
              <i className="fab fa-facebook-f">
                <span className="ms-2">Facebook</span>
              </i>
            </NavLink>
            <NavLink className="footer-link" to={ABOUTUS_ROUTE}>
              <i className="fab fa-instagram">
                <span className="ms-2">Instagram</span>
              </i>
            </NavLink>
            <NavLink className="footer-link" to={ABOUTUS_ROUTE}>
              <i className="fab fa-twitter">
                <span className="ms-2">Twitter</span>
              </i>
            </NavLink>
            <NavLink className="footer-link" to={ABOUTUS_ROUTE}>
              <i className="fab fa-youtube">
                <span className="ms-2">Youtube</span>
              </i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
