import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const RecipeGeneratorAPI = ({ selectedItems }) => {
  const [, setRecipes] = useState([]);
  const [, setSelectedItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchRecipes = async (selectedItems) => {
    setIsLoading(true);

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

    setRecipes(recipes);
    setShowModal(true);
    navigate("/recipes", { state: { recipes: recipes } });
  };

  const handleGenerateButtonClick = async (event) => {
    event.preventDefault();

    await fetchRecipes(selectedItems);

    // Reset the selectedItems
    setSelectedItems([]);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <Button
          id="fixed-btn generate-btn"
          onClick={handleGenerateButtonClick}
          type="submit"
        >
          Generate Recipes
        </Button>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Dialog className="custom-modal-dialog">
          <Modal.Header closeButton>
            <Modal.Title>Your recipe is being generated</Modal.Title>
          </Modal.Header>
        </Modal.Dialog>
      </Modal>
      {isLoading && (
        <div className="loading-container">
          <Spinner
            className="api-spinner"
            animation="border"
            variant="primary"
          />
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default RecipeGeneratorAPI;
