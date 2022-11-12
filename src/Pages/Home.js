import { Link } from "react-router-dom";

import './Home.css'

export const Home = () => {
  return (
    <div className="home-page">
      <section className="title">
        <h1>ENCUENTRA LAS PAREJAS</h1>
      </section>
      <nav className="nav-level">
        <Link className="easy-button" to='/easy'>EASY</Link>
        <Link className="medium-button" to='/medium'>MEDIUM</Link>
        <Link className="hard-button" to='/hard'>HARD</Link>
      </nav>
    </div>
  )
}
