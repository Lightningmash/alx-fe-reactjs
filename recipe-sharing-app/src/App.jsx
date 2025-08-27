import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetail';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <header style={{ marginBottom: 16 }}>
        <h1>🍲 Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
