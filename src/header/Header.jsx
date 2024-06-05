import { useState, useEffect } from 'react'
import './Header.css'

export const Header = () => {
  const [blockName, setBlockName] = useState("")
  const [blocks, setBlocks] = useState(JSON.parse(localStorage.getItem("blocks")) || [])
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"]

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setBlocks([...blocks, { name: blockName, duration: 0, durationClass: alphabet[0] }])
      setBlockName("")
    }
  }

  const increaseBlockDuration = (i) => {
    let duration = blocks[i].duration + 1
    if (duration > 25) duration = 25
    const newBlocks = [...blocks]
    newBlocks[i] = { ...newBlocks[i], duration: duration, durationClass: alphabet[duration] }
    setBlocks(newBlocks)
  }

  const decreaseBlockDuration = (e, i) => {
    e.preventDefault()
    let duration = blocks[i].duration - 1
    if (duration < 0) duration = 0
    const newBlocks = [...blocks]
    newBlocks[i] = { ...newBlocks[i], duration: duration, durationClass: alphabet[duration] }
    setBlocks(newBlocks)
  }

  useEffect(() => {
    localStorage.setItem("blocks", JSON.stringify(blocks))
    console.log(blocks[0])
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
        <button onClick={() => setBlocks([])}>Delete All Blocks</button>
      </div>
      <div className="blocks">
        {blocks.map((block, index) => (
          <div className='block-label' key={index}>
            <div className='label'>
              {block.name}
            </div>
            <div
              className={`block ${block.durationClass}`}
              onClick={() => increaseBlockDuration(index)}
              onContextMenu={(event) => decreaseBlockDuration(event, index)}
            >
              {Array(block.duration).fill().map((_, index) => (
                <div className='mini-block' key={index}></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}