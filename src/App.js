import Home from "./MyComponents/Home";
import About from "./MyComponents/About";
import AllNews from "./MyComponents/AllNews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route index element={<Home />} />
            <Route path="allnews" element={<AllNews />} />
            <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
