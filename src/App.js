import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox ";
import foods from "./foods.json";

function App() {
  const [foodList, setFood] = useState(foods);

  return (
    <div className="App">
      <div className="foodCards">
        {foodList.map((food, i) => {
          return <FoodBox key={i + Date.now()} food={food} />;
        })}
      </div>
    </div>
  );
}

export default App;
