import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Recipes from "./assets/pages/Recipes";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import RecipeDetails from "./assets/pages/RecipeDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/recipe" element={<RecipeDetails />} />
    </Routes>
  );
}

export default App;
