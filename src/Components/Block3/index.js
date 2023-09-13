import React from "react";
import "./index.css";
import SVG from "react-inlinesvg";
import { arrowIcon, subText, text1, text2 } from "./constant";
const Platform = () => {
  return (
    <div className="platform">
      <div className="line_block_3"></div>
      <div className="line2_block_3"></div>
      <div className="heading_block_3">
        Build on Developer Friendly <br />
        <span>Cicca Platform</span>
      </div>
      <div className="arrowDiv">
        <div className="arrowButton">
          <div className="arrowText">Go to Developer Documentation</div>
          <div className="arrowIcon">
           <SVG src={arrowIcon} />
          </div>
        </div>
        {/* <div className='line'></div> */}
      </div>
      <div className="sub_block_3">
        <div className="text_sub_block_3">
            {text1}
        </div>
        <div className="img_sub_block_3">
             
        </div>
      </div>
      <div className="heading2_block_3">
        Contribute to core
      </div>
      <div className="sub_heading2_block_3">
        {subText}
      </div>
      <div className="sub_block_3 sub_block_margin">
        <div className="text_sub_block_3">
            {text2}
        </div>
        <div className="img_sub_block_3">
             
        </div>
      </div>
    </div>
  );
};

export default Platform;
