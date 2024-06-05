import { useState } from 'react'
import './Day.css'

export const Day = () => {
  const [blocks, setBlocks] = useState(JSON.parse(localStorage.getItem("blocks")) || [])
  console.log(blocks)
  return (
    <div className='Day'>
      Day Componentsf
    </div>
  )
}