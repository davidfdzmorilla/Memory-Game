import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EasyPanel } from "../Pages/EasyPanel";
import { HardPanel } from "../Pages/HardPanel";
import { Home } from "../Pages/Home";
import { MediumPanel } from "../Pages/MediumPanel";

export const Router = () => {
  const [difficulty, setDifficulty] = useState([])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home setDifficulty={setDifficulty}/>} />
          <Route path="/game-board" element={<EasyPanel difficulty={difficulty} />} />
        </Routes>
      </BrowserRouter>
      {/* <footer>
        <h4 className="link-portfolio">davidfdzmoorilla.dev</h4>
      </footer> */}
    </>
  );
};
