import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdPeople } from "react-icons/md";
import { AiFillProfile } from "react-icons/ai";
import { TiWarning } from "react-icons/ti";

import "./App.css";
import Team from "./pages/Team";
import Player from "./pages/Player";
import Profile from "./pages/Profile";
import About from "./pages/About";
import DetailTeam from "./pages/DetailTeam";
import DetailPlayer from "./pages/DetailPlayer";

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">NBA 2K22</p>
      </header>
      <Routes>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/player" element={<Player />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/team/detailteam" element={<DetailTeam />}></Route>
        <Route path="/player/detailplayer" element={<DetailPlayer />}></Route>
      </Routes>
      <footer>
        <NavLink to="/team" className="iconWrapper">
          <HiHome className="icon" />
          Team
        </NavLink>
        <NavLink to="/player" className="iconWrapper">
          <MdPeople className="icon" />
          Player
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <AiFillProfile className="icon" />
          Profile
        </NavLink>
        <NavLink to="/about" className="iconWrapper">
          <TiWarning className="icon" />
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}
export default App;
