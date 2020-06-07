import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function Confirmation({ history }) {
  const regis = useParams();
  console.log("confrim page: ", regis);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle></CardTitle>
          <CardSubtitle>
            <b>Registration Successful</b>
          </CardSubtitle>
          <br />
          <CardText>
            Your Registration Number for the event is:{" "}
            <strong>{regis.id}</strong>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Confirmation;
