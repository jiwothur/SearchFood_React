import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css'

const App = () =>{

  const APP_ID = "3dfd488b";
  const APP_KEY = "00b3826a7d8f214b19e3639d258df944";

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] =useState('chicken');
  
  useEffect(()=>{
    getRecipies();
  },[query]);

  const getRecipies = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
  }
  const getSearch = (e) =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return(
    <div className="App">
      <form className="search-form" onSubmit ={getSearch}>
        <input className ="search-bar" type="text" value={search}
         onChange={(e)=>{setSearch(e.target.value);
          console.log(search);
        }}></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (

        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} 
        calories={recipe.recipe.calories} image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}

export default App;
