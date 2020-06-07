import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Spinner,
} from "reactstrap";
import axios from "axios";

function Event({ history }) {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    axios
      .get("http://localhost:8000/event")
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        setLoading(false);
        setEvent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {loading ? (
        <div>
          <Spinner style={{ width: "3rem", height: "3rem", align:"center", margin: "30px"}} type="grow" />
        </div>
      ) : (
        <div>
          {event.map((events) => {
            return (
              <Card >
                <CardBody>
                  <CardTitle><b>Title : </b> {events.title}</CardTitle>
                  <CardSubtitle key={events._id}>
                    <b>Venue : </b> {events.venue}
                  </CardSubtitle>
                  <CardText><b>Details : </b> {events.description}</CardText>
                  <Button
                    color="primary"
                    onClick={() =>
                      history.push(`events/register/${events._id}`)
                    }
                  >
                    Register
                  </Button>
                </CardBody>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Event;
