import { useEffect, useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState(recipe?.title ?? '');
  const [description, setDescription] = useState(recipe?.description ?? '');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipeId, { title: title.trim(), description: description.trim() });
    setSaved(true);
    setTimeout(() => setSaved(false), 1200);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        type="text"
        placeholder="New title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="New description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br />
      <button type="submit">Save Changes</button>
      {saved && <span style={{ marginLeft: 8 }}>✅ Saved</span>}
    </form>
  );
};

export default EditRecipeForm;
