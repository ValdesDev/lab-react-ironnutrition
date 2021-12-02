import { Input } from "antd";

const SearchFood = (props) => {
  return (
    <div>
      <h2>Search</h2>
      <Input
        type="text"
        onChange={(event) => props.filterBy(event.target.value)}
      />
    </div>
  );
};

export default SearchFood;