import { Store } from '../store/store'
import './Day.css'

export const Day = () => {
  const store = Store()

  return (
    <div className='Header Day'>
      {
        store.blocks.length >= 1 &&
        store.days.map((day, indexDay) => (
          <div className='day' key={indexDay}>
            <div className='blocks'>
              {day.blocks.map((block, indexBlock) => (
                <div className='block-and-name' key={indexBlock}>
                  <div className='block'>
                    {block.miniBlocks.map((miniBlock, indexMiniBlock) => (
                      <input
                        type="checkbox"
                        className='mini-block'
                        key={indexMiniBlock}
                        onChange={() => store.markMiniBlock(indexDay, indexBlock, indexMiniBlock)}
                      />
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