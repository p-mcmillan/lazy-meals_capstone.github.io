import React, { useState, useEffect } from "react";
import axios from "axios";

//const API_KEY = "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";

// const RecipeGeneratorAPI = ({ selectedItems }) => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const fetchRecipesData = async () => {
//       const fetchedRecipes = await fetchRecipes(selectedItems);
//       setRecipes(fetchedRecipes);
//     };

//     fetchRecipesData();
//   }, [selectedItems]);

//   const fetchRecipes = async (selectedItems) => {
//     const prompt = `I have these ingredients: ${selectedItems.join(
//       ", "
//     )}. Suggest 5 different recipes I can cook. The response should be 3 paragraphs. Don't include ingredient lists etc. in the response, and no decorative text like "Here's a recipe for you" or "Another recipe you'd enjoy...".`;

//     const response = await axios.post(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         model: "gpt-3.5-turbo",
//         messages: [{ content: prompt, role: "user" }],
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           // Authorization: `Bearer ${API_KEY}`,
//         },
//       }
//     );

//     const data = response.data;

//     const recipes = data.choices[0].message.content
//       .split("\n")
//       .filter((line) => line.length > 0);

//     return [
//       recipes[0],
//       recipes[1],
//       recipes[2],
//       recipes[3],
//       recipes[4],
//       recipes[5],
//     ];
//   };

//   return (
//     <div>
//       <h1>Hello API Recipie Will Follow Below</h1>
//       <ul>
//         {recipes.map((recipe, index) => (
//           <li key={index}>{recipe}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RecipeGeneratorAPI;

//import React, { useState, useEffect } from "react";
//import axios from "axios";

//const API_KEY = "YOUR_API_KEY_HERE";

const RecipeGeneratorAPI = ({ selectedItems }) => {
  const [recipes, setRecipes] = useState([]);
  const [generateRecipes, setGenerateRecipes] = useState(false);
  const [, setSelectedItems] = useState([]);

  console.log("Selected items API:", selectedItems);

  useEffect(() => {
    if (generateRecipes) {
      const fetchRecipesData = async () => {
        const fetchedRecipes = await fetchRecipes(selectedItems);
        setRecipes(fetchedRecipes);
      };

      fetchRecipesData();
    }
  }, [generateRecipes, selectedItems]);

  const fetchRecipes = async (selectedItems) => {
    const prompt = `I have these ingredients: ${selectedItems.join(
      ", "
    )}. Suggest 5 different recipes I can cook. The response should be 3 paragraphs. Don't include ingredient lists etc. Only provide recipes with the ingredients provided`;

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ content: prompt, role: "user" }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    const data = response.data;

    const recipes = data.choices[0].message.content
      .split("\n")
      .filter((line) => line.length > 0);

    return [
      recipes[0],
      recipes[1],
      recipes[2],
      recipes[3],
      recipes[4],
      recipes[5],
    ];
  };

  const handleGenerateButtonClick = (event) => {
    event.preventDefault();
    setGenerateRecipes(true);

    // Reset the selectedItems
    setSelectedItems([]);
  };

  return (
    <div>
      <h1>Hello API Recipie Will Follow Below</h1>
      <button onClick={handleGenerateButtonClick}>Generate Recipes</button>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeGeneratorAPI;
