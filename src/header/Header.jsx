import { useState } from 'react'
import { Store } from '../store/store.js'
import './Header.css'

export const Header = () => {
  const store = Store()
  const [input, setInput] = useState("")
  const [placeHolder, setPlaceHolder] = useState("Type a new block and press Enter")

  const handleEnter = (e) => {
    if (e.key === "Enter" && !input) setPlaceHolder("Type something")
    if (e.key === "Enter" && input) {
      store.addBlock(input)
      setInput("")
      setPlaceHolder("Type a new block and press Enter")
    }
  }

  return (
    <div className='Header'>
      <input
        type="text"
        placeholder={placeHolder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleEnter(e)}
      />
      <button onClick={() => store.deleteAllBlocks()}>Delete All Blocks</button>
      <div className="blocks">
        {store.blocks.map((block, index) => (
          <div className='block' key={index}>{index}</div>
        ))}
      </div>
    </div>
  )
}