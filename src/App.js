import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Components/Recipe';

function App() {

  const APP_ID = '583cacab'
  const APP_KEY = '68010ea183f127431f5f7c1695d538b1'

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(['']);
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = async (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
          className="search-bar" 
          type="text" 
          onChange={updateSearch}>
        </input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} 
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          />
      ))}
    </div>
  );
}

export default App;
