import { useState, useEffect } from 'react'
import './Header.css'

export const Header = () => {
  const [blockName, setBlockName] = useState("")
  // const [blockDuration, setBlockDuration] = useState("")
  const [blocks, setBlocks] = useState(JSON.parse(localStorage.getItem("blocks")) || [])

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setBlocks([...blocks, { name: blockName, duration: 1 }])
      setBlockName("")
      // setBlockDuration("")
    }
  }

  useEffect(() => {
    localStorage.setItem("blocks", JSON.stringify(blocks))
  }, [blocks])

  return (
    <div className='Header'>
      <div className="create">
        <input
          type="text"
          placeholder='type a new block name and press Enter'
          value={blockName}
          onChange={(e) => setBlockName(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button onClick={()=>setBlocks([])}>Delete All Blocks</button>
      </div>
      <div className="blocks">
        {blocks.map(block => (
          <div className={`block ${block.duration}`}>{block.name}</div>
        ))}
      </div>
    </div>
  )
}