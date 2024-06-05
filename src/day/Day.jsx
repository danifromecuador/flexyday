import { useState } from 'react'
import './Day.css'

export const Day = ({ blocks = [], label }) => {
  let blocksWithChecked = []
  for (let i = 0; i < blocks.length; i++) {
    let miniBlock = []
    for (let j = 0; j < blocks[i].duration + 1; j++) {
      miniBlock.push({ completed: "false" })
    }
    blocksWithChecked.push({ miniBlock: miniBlock, durationClass: blocks[i].durationClass })
  }

  const [workedHours, setWorkedHours] = useState(0)
  const handleCheckBoxChange = (event) => {
    event.target.checked === true ? setWorkedHours(workedHours + 1) : setWorkedHours(workedHours - 1)
  }

  return (
    <div className='Header Day'>
      <div className="blocks">
        {blocksWithChecked.map((block, indexBlock) => (
          <div className='block-label' key={indexBlock} >
            <div className={`block ${block.durationClass}`}>
              {block.miniBlock.map((miniBlock, indexMiniBlock) => (
                <input type="checkbox" key={indexMiniBlock} className='mini-block' onChange={handleCheckBoxChange} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="worked-hours">
        {label}: {workedHours / 4} h
      </div>
    </div>
  )
}