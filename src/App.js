import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Starred from "./pages/Starred";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColors: {
    blue: "#2400ff",
    gray: "#c6c6c6",
    dark: "#353535",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/starred" element={<Starred />}></Route>
          <Route path="/show/:id" element={<Show />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
