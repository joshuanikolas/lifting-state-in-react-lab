//import './App.css'

const IngredientList = (props) => {
    return ( 
    <ul>
        {props.openIngredients.map((openIngredient, index) => (
            <li key={index} style={{ backgroundColor: openIngredient.color }}>{openIngredient.name}
            <button onClick={() => props.addToBurger(openIngredient)}>+</button>
            </li>
        ))}
    </ul>
    );
};
  
  export default IngredientList;