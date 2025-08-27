import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = Number(id); // ensure numeric if using Date.now()
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate('/')}>Back to list</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h3>Edit Recipe</h3>
      <EditRecipeForm recipeId={recipeId} />

      <DeleteRecipeButton recipeId={recipeId} />
      <br />
      <button onClick={() => navigate('/')}>Back to list</button>
    </div>
  );
};

export default RecipeDetails;
