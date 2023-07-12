import React from "react";
import Card from "react-bootstrap/Card";
import "./CardContainer.css"; // Import the custom CSS file

function CardContainer(props) {
  const { product } = props;
  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Title class="card-title">{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardContainer;
