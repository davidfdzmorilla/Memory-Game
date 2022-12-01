import { Link } from "react-router-dom";

import './Home.css'

export const Home = ({ setDifficulty }) => {
  return (
    <div className="home-page">
      <section className="title">
        <h1>ENCUENTRA LAS PAREJAS</h1>
      </section>
      <nav className="nav-level">
        <Link onClick={() => setDifficulty([4, 4])} className="easy-button" to='/game-board'>EASY</Link>
        <Link onClick={() => setDifficulty([6, 4])} className="medium-button" to='/game-board'>MEDIUM</Link>
        <Link onClick={() => setDifficulty([8, 4])} className="hard-button" to='/game-board'>HARD</Link>
      </nav>
    </div>
  )
}
