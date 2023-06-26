import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import YourIndependentGrocer_Davie from "./data/data.json";
import Header from "./components/Header/Hearder";
import Home from "./pages/Home/Home";
import DavieStreet from "./pages/YourIndependentGrocer/DavieStreet/DavieStreet";
import AddStore from "./pages/AddStore/AddStore";
import SignUp from "./pages/SignUp/SignUp";
import About from "./pages/About/About";
import RecipeGeneratorAPI from "./api/api";
import RecipesPage from "./pages/Recipes/Recipes";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const [davieData, setData] = useState(YourIndependentGrocer_Davie);
  return (
    <div className="App">
      <Router>
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
          <Route path="/" element={<RecipeGeneratorAPI />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
