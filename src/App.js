import { useState } from "react";
import "./App.css";
import foods from "./foods.json";

function App() {
  const [foodList, setFood] = useState(foods);

  return (
    <div className="App">
      <div className="foodCards">
        {foodList.map((food, i) => {
          return (
            <div>
              <p>{food.name}</p>
              <img src={food.image} alt={food.name} width={100} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
