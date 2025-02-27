import styles from "./Description.module.css";
import { Component } from "react";

let recipeTitle = "Orange Creamsicle Smoothie";
let recipeShortDescription = "Refreshing orange creamsicle smoothie that tastes just like the summer treat you grew up on! This simple and delicious orange smoothie recipe is made without banana, naturally sweetened and has a sneaky boost of veggies. You’ll make this one all year long!"

const RecipeAuthor = () => {
  let authorLink = "https://www.ambitiouskitchen.com/";
  let authorPhoto =
    "https://www.ambitiouskitchen.com/wp-content/uploads/2019/09/monique-2-1164x1164.jpg";
  let authorName = "Monique Volz";

  return (
    <div className={styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt={authorName} className={styles.imageUpdates} />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Ambitious Kitchen</a>
      </div>
    </div>
  );
};

class RecipeDescription extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>{recipeTitle}</h1>
          <p> {recipeShortDescription} </p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}


export default RecipeDescription;