import { Clock } from './Clock'
import { Exit } from './Exit'
import './Header.css'
import { Movements } from './Movements'
import { RestMovements } from './RestMovements'

export const Header = () => {
  return (
    <header className='easy-header'>
      <div className='movements-container'>
        <Movements />
      </div>
      <div className='rest-movements-container'>
        <RestMovements />
      </div>
      <div className='clock-container'>
        <Clock />
      </div>
      <div className='exit-container'>
        <Exit />
      </div>
    </header>
  )
}
