import { create } from "zustand"
import { devtools } from "zustand/middleware"

export const Store = create(devtools((set) => ({
  bears: 23,
  blocks: [],
  addBlock: (name) => set((state) => ({
    blocks: [...state.blocks, { name: name, miniBlocks: [{ completed: false }] }]
  })),
  deleteAllBlocks: () => set({ blocks: [] }),
  addMiniBlock: (i) => set((state) => {
    let blocksCopy = [...state.blocks]
    blocksCopy[i].miniBlocks.push({ completed: false })
    return ({ blocks: blocksCopy })
  }),
  deleteMiniBlock: (i) => set((state) => {
    let blocksCopy = [...state.blocks]
    let miniBlocksCopy = blocksCopy[i].miniBlocks
    miniBlocksCopy.pop()
    blocksCopy[i].miniBlocks = miniBlocksCopy
    return ({ blocks: blocksCopy })
  })
})))