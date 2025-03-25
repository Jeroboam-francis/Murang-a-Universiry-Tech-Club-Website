import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Tracks from "./Pages/Tracks/Tracks";
import Leadership from "./Pages/Leadership/Leadership";
import Events from "./Pages/Events/Events";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
