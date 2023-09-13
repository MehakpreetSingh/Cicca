import React from 'react'
import './index.css'
import SVG from "react-inlinesvg";
import { arrowIcon ,defaultArr} from "./constant";

const Contributors = () => {
    return (
        <div className='contributors'>
            <div className='heading_block1'>
                The home for all contributors <br />
                — <span>including you</span>
            </div>
            <div className='contributor_content'>
            {
                        defaultArr.map((text) => {
                            
                        
                return <div className='contentView'>
                    <div className='img_box'></div>
                    <div className='text_box'>
                        {text}
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
                </div>
            })
        }
            </div>
        </div>
    )
}

export default Contributors