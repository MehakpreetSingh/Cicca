import React from 'react'
import './details.css'
import { bulletPoints } from './constant'

const Details = () => {
  return (
    <div className='container2'>
      <div className='line_block_2'>

      </div>
        <div className='left-gradient'>
        </div> 
        <div className='leftView'>
        {bulletPoints.map((el) => {
                return <div className='bullet-points'>{el}</div>
            })}
        </div> 
        <div className='rightView'>
            <div className='lineData' id='item1'>→ <span className='style1'>~/Bitindi-demo</span> <span className='style2'>npm install web3</span></div>
            <div className='lineData' id='item2'>+ web3@1.5.2</div>
            <div className='lineData' id='item3'> added 109 packages from 64 contributors and audited 109</div>
            <div className='lineData' id='item4'>packages in 3.491s</div>
            <div className='lineData' id='item5'>9 packages are looking for funding</div>
            <div className='lineData' id='item6'>run `npm fund` for details</div>
            <div className='lineData' id='item7'>found 0 vulnerabilities</div>
            <div className='lineData' id='item8'>→ <span className='style1'>~/Bitindi-demo</span></div>
        </div>
        <div className='right-gradient'></div>
    </div> 
  )
}

export default Details