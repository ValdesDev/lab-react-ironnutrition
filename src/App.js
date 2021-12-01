import { useState } from "react";
import "./App.css";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox ";
import foods from "./foods.json";

function App() {
  const [foodList, setFoodList] = useState(foods);

  function addFood (food){
    const foodListCopy = [...foodList];
    foodListCopy.push(food);
    setFoodList(foodListCopy);
  }

  return (
    <div className="App">
      <div>
        <AddFoodForm addFood={addFood} />
      </div>
      <div className="foodCards">
        {foodList.map((food, i) => {
          return <FoodBox key={i} food={food} />;
        })}
      </div>
    </div>
  );
}

export default App;
