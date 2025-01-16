import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Donate from "./pages/donate";
import Causes from "./pages/causes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/give" element={<Donate />} />
          <Route path="/causes" element={<Causes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
