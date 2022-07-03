import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Starred from "./pages/Starred";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/starred" element={<Starred />}></Route>
        <Route path="/show/:id" element={<Show />}></Route>
      </Routes>
    </div>
  );
}

export default App;
