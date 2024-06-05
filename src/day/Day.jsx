import { useState } from 'react'
import './Day.css'

export const Day = ({ blocks = [], label }) => {
  const [workedHours, setWorkedHours] = useState(0)
  const handleCheckBoxChange = (event) => {
    
    if (event.target.checked === true) {
      setWorkedHours(workedHours + 1)
    }
    else setWorkedHours(workedHours - 1)
  }

  return (
    <div className='Header Day'>
      <div className="blocks">
        {blocks.map((block, index) => (
          <div className='block-label' key={index}>
            <div className={`block ${block.durationClass}`}>
              {Array(block.duration + 1).fill().map((_, index) => (
                <input type="checkbox" key={index} className='mini-block' onChange={handleCheckBoxChange} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="worked-hours">
        {label}: {workedHours/4} h
      </div>
    </div>
  )
}