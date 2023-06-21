import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import YourIndependentGrocer_Davie from "./data/data.json";
import Header from "./components/Header/Hearder";
import Home from "./pages/Home/Home";
import DavieStreet from "./pages/YourIndependentGrocer/DavieStreet/DavieStreet";
import AddStore from "./pages/AddStore/AddStore";
import SignUp from "./pages/SignUp/SignUp";
import About from "./pages/About/About";

function App() {
  const [davieData, setData] = useState(YourIndependentGrocer_Davie);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/independent-davie"
            element={<DavieStreet davieData={davieData} />}
          />
          <Route path="/add-store" element={<AddStore />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
