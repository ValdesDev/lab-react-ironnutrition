import { Card, Col, Divider, Button } from "antd";

const FoodBox = (props) => {
    const {name,calories,image,servings} = props.food;
  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} alt={name} height={60} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories*servings}</b> kcal
        </p>
        <Button type="primary" onClick={()=>props.deleteFood(name)}> Delete </Button>
      </Card>
    </Col>
  );
};

export default FoodBox;
