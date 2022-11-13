import { useState } from 'react'
import { GameBoard } from '../Components/GameBoard'
import { Header } from '../Components/Header'
import './EasyPanel.css'

export const EasyPanel = () => {
  const [mov, setMov] = useState(0)
  const [restMov, setRestMov] = useState(0)
  const [secs, setSeconds] = useState(60);

  return (
    <div className='easy-panel-page'>
      <Header
        mov={mov}
        restMov={restMov}
        secs={secs}
        setSeconds={setSeconds}
      />
      <GameBoard
        setMov={setMov}
        mov={mov}
        restMov={restMov}
        setRestMov={setRestMov}
        tablero={"4*4"}
        secs={secs}
        setSeconds={setSeconds}
      />
    </div>
  )
}
