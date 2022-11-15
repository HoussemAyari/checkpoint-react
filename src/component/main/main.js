import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./main.css";

function MainCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="src/img/téléchargement.png" width="50px" />
      <Card.Body>
        <Card.Title>Houssem Eddine Ayari</Card.Title>
        <Card.Text>IM WORKING AS FREELANCER</Card.Text>
        <Button variant="primary">Contact</Button>
      </Card.Body>
    </Card>
  );
}

export default MainCard;
