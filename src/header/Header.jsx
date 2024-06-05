import { useState, useEffect } from 'react'
import './Header.css'

export const Header = () => {
  const [blockName, setBlockName] = useState("")
  const [blockDurationClass, setBlockDurationClass] = useState("a")
  const [blocks, setBlocks] = useState(JSON.parse(localStorage.getItem("blocks")) || [])
  const alphabet = [..."abcdefghijk"]

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setBlocks([...blocks, { name: blockName, duration: 1, durationClass:alphabet[1] }])
      setBlockName("")
    }
  }

  const increaseBlockDuration = (i) => {
    const newBlocks = [...blocks];
    newBlocks[i] = { ...newBlocks[i], duration: newBlocks[i].duration + 1, durationClass: alphabet[newBlocks[i].duration] };
    setBlocks(newBlocks);
  };

  useEffect(() => {
    localStorage.setItem("blocks", JSON.stringify(blocks))

    console.log(blocks);

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
          <div
            className={`block ${block.durationClass}`}
            onClick={() => increaseBlockDuration(index)}
          >
            {block.name}
            {block.duration}
          </div>
        ))}
      </div>
    </div>
  )
}