import styles from './Ingredients.module.css';


const RecipeIngredients = () => {
    
    let ingredients = ["medjool dates", "fresh squeezed orange juice" , "plain or vanilla greek yogurt", "light coconut milk", "frozen cauliflower"];
    
    return (
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
        </ul>
        </div>

    )

};

export default RecipeIngredients;