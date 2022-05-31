import React from "react";
import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";
import logoSubtitle from "../../assets/images/logo_sub.png";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img className="sub-logo" src={logoSubtitle} alt="Shadi" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#5b321f" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/about">
          <FontAwesomeIcon icon={faUser} color="#5b321f" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/products">
          <FontAwesomeIcon icon={faProductHunt} color="#5b321f" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} color="#5b321f" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ShadiSafaee"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#5b321f" />
          </a>
        </li>
        <li>
          <a href="skype:live:shadabsafaee" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faSkype} color="#5b321f" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
