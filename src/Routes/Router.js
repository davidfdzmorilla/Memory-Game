import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EasyPanel } from "../Pages/EasyPanel";
import { HardPanel } from "../Pages/HardPanel";
import { Home } from "../Pages/Home";
import { MediumPanel } from "../Pages/MediumPanel";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/easy" element={<EasyPanel />} />
          <Route path="/medium" element={<MediumPanel />} />
          <Route path="/hard" element={<HardPanel />} />
        </Routes>
      </BrowserRouter>
      {/* <footer>
        <h4 className="link-portfolio">davidfdzmoorilla.dev</h4>
      </footer> */}
    </>
  );
};
