import { create } from "zustand"
import { devtools } from "zustand/middleware"

export const Store = create(devtools((set) => ({
  bears: 23,
  blocks: JSON.parse(localStorage.getItem("store")).blocks || [],
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
    if (miniBlocksCopy.length > 1) miniBlocksCopy.pop()
    blocksCopy[i].miniBlocks = miniBlocksCopy
    return ({ blocks: blocksCopy })
  }),
  days: [],
  createDays: () => set((state) => {
    let blocksCopy = [...state.blocks]
    const daysNames = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    const daysArray = []
    for (let i = 0; i < daysNames.length; i++) {
      daysArray.push({ name: daysNames[i], blocks: blocksCopy })
    }
    return ({
      days: daysArray
    })
  })
})))