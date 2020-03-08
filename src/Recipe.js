import React from 'react';
import style from './recipe.module.css';
const Recipe = ({title,calories,image,ingredients}) =>{
    console.log(ingredients);
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h3>ingredient</h3> 
            <ol>
            
              {ingredients.map(ingredient =>(
                   <li>{ingredient.text}</li>
               ))}
            </ol>
            <h2>Calories : {calories}</h2>
            <img className={style.image} src={image} alt={title}/>
        </div>
    )
}

export default Recipe;