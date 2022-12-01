import { useState } from 'react'
import { GameBoard } from '../Components/GameBoard'
import { Header } from '../Components/Header'
import './EasyPanel.css'

export const EasyPanel = ({ difficulty }) => {
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
        difficulty={difficulty}
        setMov={setMov}
        mov={mov}
        restMov={restMov}
        setRestMov={setRestMov}
        secs={secs}
        setSeconds={setSeconds}
      />
    </div>
  )
}
