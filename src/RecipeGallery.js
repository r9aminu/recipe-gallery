import React from 'react';
import './RecipeGallery.css';

// Define array of recipes with their properties
const recipes = [
    {
        id: 1,
        title: "Spaghetti Carbonara",
        ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
        image: "https://www.allrecipes.com/thmb/zJzTLhtUWknHXVoFIzysljJ9wR8=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
    },
    {
        id: 2,
        title: "Grilled Cheese Sandwich",
        ingredients: ["Bread", "Cheese", "Butter"],
        image: "https://www.allrecipes.com/thmb/PwRhtq4xqenJ1tvym4pap3ab8N8=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/125434-GrilledCheeseoftheGods-mfs-3x2-067-267097af4d0b446ab646bba044445147.jpg",
    },
    {
        id: 3,
        title: "Scrambled Eggs",
        ingredients: ["Eggs", "Milk", "Butter", "Salt", "Black pepper"],
        image: "https://www.allrecipes.com/thmb/Wxu9aOJ_Zvs3mmDOkSWIDsDgJc8=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/JF_241160_CreamyCottageCheeseScrambled_4x3_12902-619d00dc88594ea9b8ed884a108db16d.jpg"
    }
];


function RecipeGallery() {
  return (
    // Render recipe list
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <h2 className="recipe-title">{recipe.title}</h2>
          <div className="image-container">
            <img src={recipe.image} alt={recipe.title} className="image" />
          </div>
          {/* Render list of ingredients */}
          <ul className="recipe-ingredients">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RecipeGallery;
