import React, { useState } from "react";
import "./Home.css";
import BgVideo from "../../Images/background_2.mp4";
import SVG from "react-inlinesvg";
import { hero_sub_heading, socialIcons } from "./constant";
const Home = () => {
  return (
    <div className="home">
      <div className="top_gradient"></div>
      <div className="side_attach">
        {Array.isArray(socialIcons) &&
          socialIcons.length > 0 &&
          socialIcons.map((item) => (
            <div className="social_svg">
              <SVG src={item?.src} title={item?.name} />
            </div>
          ))}
      </div>
      <div className="content_box">
        <div className="hero_heading_section">
          <div className="hero_heading">
            The
            <span>blockchain</span>
            built for finance
          </div>
          <div className="hero_sub_heading">{hero_sub_heading}</div>
        </div>
        <div className="hero_button_section">
          <button className="button_start">
            Start Building
          </button>
          <button className="ecosystem">
           Explore  Ecosystem
          </button>
        </div>
      </div>
      <video autoPlay loop muted className="video_player">
        <source src={BgVideo} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Home;
