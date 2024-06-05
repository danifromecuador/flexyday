import { useState } from 'react'
import { Header } from '../src/header/Header'
import { Day } from '../src/day/Day'
import './App.css'

export const App = () => {
  const [blocksFromChild, setBlocksFromChild] = useState()

  const getBlocksFromChild = (value) => {
    setBlocksFromChild(value)
  }

  return (
    <div className="App">
      <Header blocksToParent={getBlocksFromChild} />
      <Day blocks={blocksFromChild} label={"monday"} />
      <Day blocks={blocksFromChild} label={"tuesday"} />
      <Day blocks={blocksFromChild} label={"wednesday"} />
      <Day blocks={blocksFromChild} label={"thursday"} />
      <Day blocks={blocksFromChild} label={"friday"} />
      <Day blocks={blocksFromChild} label={"saturday"} />
      <Day blocks={blocksFromChild} label={"sunday"} />
    </div>
  )
}

