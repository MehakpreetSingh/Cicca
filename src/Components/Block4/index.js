
import React from "react";
import "./index.css";
import SVG from "react-inlinesvg";
import { arrowIcon, subText, text1, text2 } from "./constant";

const Platform_next = () => {
    return (
        <div className="platform_next">
          <div className="line_block_4">
          <div className='line_circle_block_4'>
                    <div className='line_inner_circle_block_4'>

                    </div>
                </div>
          </div>
          <div className="heading_block_4">
            The <span>blockchain</span><br />
            built for finance
          </div>
          <div className="arrowDiv1">
            <div className="arrowButton">
              <div className="arrowText1">Go to Developer Documentation</div>
              <div className="arrowIcon1">
               <SVG src={arrowIcon} />
              </div>
            </div>
            {/* <div className='line'></div> */}
          </div>
          <div className="sub_block_4">
            <div className="text_sub_block_4">
                {text1}
            </div>
            <div className="img_sub_block_3">
                 
            </div>
          </div>
          <div className="sub_block_4 sub_block_margin">
            <div className="img_sub_block_3">
                 
            </div>
            <div className="text_sub_block_4">
                {text2}
            </div>
          </div>
          <div className="heading2_block_4">
          Found a vulnerability? 
          </div>
          <div className="sub_heading2_block_4">
            {subText}
          </div>
        </div>
      );
}

export default Platform_next