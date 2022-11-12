import { GameBoard } from '../Components/GameBoard'
import { Header } from '../Components/Header'
import './EasyPanel.css'

export const EasyPanel = () => {
  return (
    <div className='easy-panel-page'>
      <Header />
      <GameBoard tablero={"4*4"} />
    </div>
  )
}
