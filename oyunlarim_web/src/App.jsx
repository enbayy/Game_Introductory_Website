import { useState } from 'react'
import './App.css'
import Header from './component/header.jsx'
import { games } from './data'
import Games from './component/game.jsx'
import './css/game.css'

function App() {

  return (
    <div>
      <Header />
      <div className='game-main'>
        {
          games?.map((game) => (
            <Games key={game.id} game={game} />
          ))
        }
      </div>
    </div>
  )
}

export default App
