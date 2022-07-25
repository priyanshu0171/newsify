import Home from "./MyComponents/Home";
import About from "./MyComponents/About";
import AllNews from "./MyComponents/AllNews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReadNews from "./MyComponents/ReadNews";
function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route index element={<Home />} />
            <Route path="allnews" element={<AllNews />} />
            <Route path="about" element={<About />} />
            <Route path="readnews" element={<ReadNews/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
