import { useState } from 'react'
import { Store } from '../store/store.js'
import './Header.css'

export const Header = () => {
  const store = Store()
  const [input, setInput] = useState("")
  const [placeHolder, setPlaceHolder] = useState("Type a new block and press Enter")

  const addBlock = (e) => {
    if (e.key === "Enter" && !input) setPlaceHolder("Type something")
    if (e.key === "Enter" && input) {
      store.addBlock(input)
      setInput("")
      setPlaceHolder("Type a new block and press Enter")
    }
  }

  const addMiniBlock = (i) => store.addMiniBlock(i)

  const deleteMiniBlock = (event, i) => {
    event.preventDefault()
    store.deleteMiniBlock(i)
  }

  return (
    <div className='Header'>
      <input
        type="text"
        placeholder={placeHolder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => addBlock(e)}
      />
      <button onClick={() => store.deleteAllBlocks()}>Delete All Blocks</button>
      <div className="blocks">
        {store.blocks.map((block, indexBlock) => (
          <div className='block-and-name' key={indexBlock}>
            <div className="name">{block.name}</div>
            <div className='block' onClick={() => addMiniBlock(indexBlock)}>
              {block.miniBlocks.map((miniBlock, indexMiniBlock) => (
                <div className='mini-block' key={indexMiniBlock} onContextMenu={(event) => deleteMiniBlock(event, indexBlock)} ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}