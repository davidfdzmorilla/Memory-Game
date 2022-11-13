import { Clock } from './Clock'
import { Exit } from './Exit'
import './Header.css'
import { Movements } from './Movements'
import { RestMovements } from './RestMovements'

export const Header = ({ mov, restMov, secs, setSeconds }) => {
  return (
    <header className='easy-header'>
      <div className='movements-container'>
        <Movements
          mov={mov}
        />
      </div>
      <div className='rest-movements-container'>
        <RestMovements
          restMov={restMov}
        />
      </div>
      <div className='clock-container'>
        <Clock
          secs={secs}
          setSeconds={setSeconds}
        />
      </div>
      <div className='exit-container'>
        <Exit />
      </div>
    </header>
  )
}
