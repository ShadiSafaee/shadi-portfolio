import React from "react";
import "./home.css";
import logoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <Sidebar />
      <span className="top_tag_body">&lt;body&gt;</span>
      <div className="container home_page">
        <div className="text_zone">
          <h1>
            <span className="top_tag_h1">&lt;h1&gt;</span>
            <span>Hi,</span>
            <span> I</span>
            <span>'m</span>
            <br />
            <div className="my_name">
              <img src={logoTitle} alt="S" />
              <span>hadi</span>
            </div>
          </h1>
          <h2>
            Full Stack Developer / HR generalist / Chef / Artist
            <span className="bottom_tag_h1">&lt;/h1&gt;</span>
          </h2>
          <Link to="/contact" className="contact_button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <span className="bottom_tag_body">&lt;/body&gt;</span>
    </>
  );
};

export default Home;
