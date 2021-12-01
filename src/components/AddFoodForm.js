import { Input  } from "antd";
import { useState } from "react";

const AddFoodForm = (props) =>{
    const [foodName, setFoodName] = useState("");
    const [foodImage, setFoodImage] = useState("");
    const [foodCalories, setFoodCalories] = useState(0);
    const [foodServings, setFoodServings] = useState(0);

    const addNewFood = () => {
        const food ={
          name: foodName,
          image: foodImage,
          calories: foodCalories,
          servings: foodServings,
        };
        props.addFood(food);
      };


    return(
    <div>    
        <h2>Add Food Entry</h2>
        <p>Name: </p>
        <Input  type="text" onChange={(event) => setFoodName(event.target.value)} />
        <p>Image: </p>
        <Input  type="text" onChange={(event) => setFoodImage(event.target.value)} />
        <p>Calories: </p>
        <Input  type="number" onChange={(event) => setFoodCalories(event.target.value)} />
        <p>Servings: </p>
        <Input type="number" onChange={(event) => setFoodServings(event.target.value)} />

        <button onClick={() => addNewFood()}>Create</button>

    </div>

)}

export default AddFoodForm;