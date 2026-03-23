import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Donate from "./pages/donate";
import Causes from "./pages/causes";
import Gallery from "./pages/gallery";
import Success from "./pages/success";
import Cancel from "./pages/cancel";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/ScrollToTop";
import axios from "axios";
import AlbumPage from "./pages/albumPage";

const url = process.env.REACT_APP_API_URL;

axios.defaults.baseURL = url;
axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />{" "}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/album/:id" element={<AlbumPage />} />
          </Route>
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
