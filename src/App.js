import { useState } from "react";
import "./App.css";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox ";
import SearchFood from "./components/SearchFood";
import foods from "./foods.json";

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filterdList,setFilterdList] = useState(null);

  function addFood(food) {
    const foodListCopy = [...foodList];
    foodListCopy.push(food);
    setFoodList(foodListCopy);
  }

  function filterBy(word) {
    if (!word || word.length < 1) {
      setFilterdList(null);
    } else {
      setFilterdList(foodList.filter((food) => food.name.toLowerCase().includes(word.toLowerCase())));
    }
  }

  function deleteFood(name) {
    const newFoodList = foodList.filter((food) => {
      return food.name !== name;
    });
    setFoodList(newFoodList);
  }

  return (
    <div className="App">
      <div>
        <SearchFood filterBy={filterBy} />
      </div>
      <div>
        <AddFoodForm addFood={addFood} />
      </div>
      <div className="foodCards">
        {!filterdList && foodList.map((food, i) => {
          return <FoodBox key={i} food={food} deleteFood={deleteFood} />;
        })}
        {filterdList && filterdList.map((food, i) => {
          return <FoodBox key={i} food={food} deleteFood={deleteFood} />;
        })}

      </div>
    </div>
  );
}


export default App;
