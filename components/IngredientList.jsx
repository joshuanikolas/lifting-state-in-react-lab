//import './App.css'
import React from 'react'

const IngredientList = (props) => {
    return ( 
    <ul>
        {props.availableIngredients.map((availableIngredient, index) => (
            <li key={index} style={{ backgroundColor: availableIngredient.color }}>{availableIngredient.name}
            <button onClick={() => props.addToBurger(availableIngredient)}>+</button>
            </li>
        ))}
    </ul>
    );
};
  
  export default IngredientList;