import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Donate from "./pages/donate";
import Causes from "./pages/causes";
import Gallery from "./pages/gallery";
import Success from "./pages/success";
import Cancel from "./pages/cancel";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/give" element={<Donate />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
