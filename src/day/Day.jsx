import { useEffect } from 'react'
import { Store } from '../store/store'
import './Day.css'

export const Day = () => {
  const store = Store()
  useEffect(() => store.createDays(), [store.blocks])

  return (
    <div className='Header Day'>
      {
        store.blocks.length >= 1 &&
        store.days.map((day) => (
          <div className='day'>
            <div className='blocks'>
              {day.blocks.map((block, indexBlock) => (
                <div className='block-and-name' key={indexBlock}>
                  <div className='block' onClick={() => addMiniBlock(indexBlock)}>
                    {block.miniBlocks.map((miniBlock, indexMiniBlock) => (
                      <div
                        className='mini-block'
                        key={indexMiniBlock}
                        onContextMenu={(event) => deleteMiniBlock(event, indexBlock)}
                      >
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div>
              {day.name}
            </div>
          </div>
        ))
      }
    </div>
  )
}