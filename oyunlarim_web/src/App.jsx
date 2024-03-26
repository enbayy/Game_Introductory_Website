import { useState } from 'react'
import './App.css'
import Header from './header'
import { games } from './data'
import Games from './component/game'

function App() {

  return (
    <>
      <Header />
      {games?.map((game) => (
        <Games key={game.id} game={game} />
      ))}
    </>
  )
}

export default App
