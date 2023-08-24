import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Story from "./pages/Story";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dr/story" element={<Story />} />
        <Route path="/dr/gallery" element={<Gallery />} />
        <Route path="/dr/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
