import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // back to list after delete
  };

  return (
    <button onClick={handleDelete} style={{ background: '#f44336', color: '#fff', padding: '6px 10px', border: 'none' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
