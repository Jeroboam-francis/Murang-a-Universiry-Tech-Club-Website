import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Leadership from "./Pages/Leadership/Leadership";
import Tracks from "./Pages/Tracks/Tracks";
import Events from "./Pages/Events/Events";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
