import { useState } from 'react'
import { Card } from './components/Card'
import { useCount} from './store'
import { Pokedex } from './components/Pokedex'

function App() {
  const [count, setCount] = useCount()

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen gap-5">

        <Card />
        <Pokedex />
      </div>
    </>
  )
}

export default App
