import { useLocation } from "react-router-dom";
import "../../styles/Recipes.scss";

const RecipesPage = () => {
  const location = useLocation();
  const recipes = location.state.recipes;

  return (
    <div className="generated-recipe--wrapper">
      <h1 className="generated-recipe--header">Recipes</h1>
      <ul className="no-bullets bang bang">
        {recipes.map((recipe, index) => (
          <li className="generated-recipe" key={index}>
            {recipe}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipesPage;
