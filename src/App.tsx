import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cube from "./components/Cube";
import SideBar from "./components/ui/SideBar";
import ThreeDView from "./components/ThreeDView";
import Tetris from "./components/Tetris";
import Whiteboard from "./components/Whiteboard";
import Coin from "./components/Coin";
import QABoard from "./components/QABoard";
import DashBoard from "./components/dashboard";
import Chatting from "./components/Chatting";
import Chartjs from "./components/Chartjs";
import Home from "./components/Home";
// import MouseEffect from "./effects/MouseEffect";

function App() {
  return (
    <BrowserRouter basename="/this-is-me">
      <section className="w-full h-full flex flex-row justify-start">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cube" element={<Cube />} />
          <Route path="/3dview" element={<ThreeDView />} />
          <Route path="/coin" element={<Coin />} />
          <Route path="/chartjs" element={<Chartjs />} />
          <Route path="/whiteboard" element={<Whiteboard />} />
          <Route path="/qaboard" element={<QABoard />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/tetris" element={<Tetris />} />
          <Route path="/chatting" element={<Chatting />} />
        </Routes>
        {/* <MouseEffect /> */}
      </section>
    </BrowserRouter>
  );
}

export default App;
