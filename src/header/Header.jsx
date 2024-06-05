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

  const addMiniBlock = (indexBlock) => {
    console.log(indexBlock);
    store.addMiniBlock(indexBlock)
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
          <div className='block-and-name'>
            <div className='block' key={indexBlock} onClick={() => addMiniBlock(indexBlock)}>
              {block.miniblocks.map((miniblock) => (
                <div className='mini_block'>x</div>
              ))}
            </div>
            <div className="name">{block.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}