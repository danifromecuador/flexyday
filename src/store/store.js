import { create } from "zustand"
import { devtools } from "zustand/middleware"

export const Store = create(devtools((set) => ({
  bears: 23,
  blocks: [],
  addBlock: (name) => set((state) => ({
    blocks: [...state.blocks, { name: name, miniblocks: [{ completed: false }] }]
  })),
  deleteAllBlocks: () => set({ blocks: [] }),
  addMiniBlock: (indexBlock) => set((state) => {
    let blocksCopy = state.blocks
    blocksCopy[indexBlock].miniblocks.push({ completed: false })
    return ({ blocks: blocksCopy })
  })
})))