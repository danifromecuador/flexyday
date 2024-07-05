import { create } from "zustand"
import { devtools } from "zustand/middleware"

export const Store = create(devtools((set) => ({
  bears: 23,
  blocks: JSON.parse(localStorage.getItem("store")) ? JSON.parse(localStorage.getItem("store")).blocks : [],
  days: [],

  addBlock: (name) => set((state) => ({
    blocks: [...state.blocks, { name: name, miniBlocks: [{ completed: "false" }] }]
  })),

  deleteAllBlocks: () => set({ blocks: [] }),

  addMiniBlock: (i) => set((state) => {
    let blocksCopy = [...state.blocks]
    blocksCopy[i].miniBlocks.push({ completed: "false" })
    return ({ blocks: blocksCopy })
  }),

  deleteMiniBlock: (i) => set((state) => {
    let blocksCopy = [...state.blocks]
    let miniBlocksCopy = blocksCopy[i].miniBlocks
    if (miniBlocksCopy.length > 1) miniBlocksCopy.pop()
    blocksCopy[i].miniBlocks = miniBlocksCopy
    return ({ blocks: blocksCopy })
  }),

  createDays: () => set((state) => {
    if (JSON.parse(localStorage.getItem("store"))) return ({ days: JSON.parse(localStorage.getItem("store").days) })
    else {
      let blocksCopy = [...state.blocks]
      const daysNames = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
      const daysArray = []
      for (let i = 0; i < daysNames.length; i++) {
        daysArray.push({ name: daysNames[i], blocks: blocksCopy })
      }
      return ({ days: daysArray })
    }
  }),

  markMiniBlock: (indexDay, indexBlock, indexMiniBlock) => set((state) => {
    // Create a shallow copy of the days array
    let daysCopy = [...state.days];

    // Create a shallow copy of the blocks array for the specific day
    let blocksCopy = [...daysCopy[indexDay].blocks];

    // Create a shallow copy of the miniBlocks array for the specific block
    let miniBlocksCopy = [...blocksCopy[indexBlock].miniBlocks];

    // Toggle the completed status for the specific miniBlock
    miniBlocksCopy[indexMiniBlock] = {
      ...miniBlocksCopy[indexMiniBlock],
      completed: miniBlocksCopy[indexMiniBlock].completed === "true" ? "false" : "true"
    };

    // Update the blocks array with the modified miniBlocks array
    blocksCopy[indexBlock] = {
      ...blocksCopy[indexBlock],
      miniBlocks: miniBlocksCopy
    };

    // Update the days array with the modified blocks array
    daysCopy[indexDay] = {
      ...daysCopy[indexDay],
      blocks: blocksCopy
    };

    // Return the new state
    return {
      days: daysCopy
    };
  })

})))