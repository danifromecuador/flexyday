import { useState } from 'react'
import './Day.css'

export const Day = ({blocks=[]}) => {

  return (
    <div className='Header'>
      <div className="blocks">
        {blocks.map((block, index) => (
          <div className='block-label' key={index}>
            <div
              className={`block ${block.durationClass}`}
              // onClick={() => increaseBlockDuration(index)}
              // onContextMenu={(event) => decreaseBlockDuration(event, index)}
            >
              {Array(block.duration+1).fill().map((_, index) => (
                <input type="checkbox" key={index} className='mini-block checkbox'  />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}