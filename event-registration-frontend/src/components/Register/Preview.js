import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Spinner,
  Button,
  Container,
  Alert
} from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Preview({ props }) {
  const {
    name,
    email,
    mobileNo,
    idcard,
    registrationType,
    event_id,
    tickets,
  } = props;
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();

  function handleConfirm() {
    setSubmitting(true);
    axios
      .post("http://localhost:8000/user/register", {
        name,
        email,
        mobileNo,
        idcard,
      })
      .then((res) => {
        const user_id = res.data._id || false;
        const event = event_id.id;

        if (user_id) {
          //using registration
          axios
            .post(`http://localhost:8000/registartion`, {
              registrationType,
              tickets,
              user_id,
              event,
            })
            .then((respose) => {
              const registrationNumber = respose.data;
              setIsSuccess(true);
              console.log("registered succesfully");
              setSubmitting(false);
              history.push(`/registration/${registrationNumber}`);
            })
            .catch((error) => {
              console.log(error);
            });

          //resetting the form
        } else {
          const { message } = res.data;
          console.log(message);
        }
      });
  }

  function handleCancel() {
    history.push(`/events/register/${event_id}`);
  }

  return (
    <Container>
      <h2>Preview Details</h2>
      <div>
        <Form>
          <h3>Details filled as: </h3>
          <FormGroup>
            <Label for="fullName">Name</Label>
            <Input
              readOnly
              type="text"
              name="fullName"
              id="fullName"
              value={props.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="mobileNumber">Mobile Number</Label>
            <Input
              type="text"
              readOnly
              name="mobileNumber"
              value={props.mobileNo}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" readOnly name="email" value={props.email} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">No. Of Tickets</Label>
            <Input type="number" readOnly name="number" value={props.tickets} />
          </FormGroup>
          <FormGroup>
            <Label for="registrationType">Registration Type</Label>
            <Input
              type="text"
              name="select"
              id="registrationType"
              readOnly
              value={props.registrationType}
            ></Input>
          </FormGroup>
          <Button color="primary" onClick={handleConfirm}>
            Confirm
          </Button>
          <Button color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </Form>
        {submitting ? (
          <div>
               <Alert color="info">
                    Registering...
      </Alert>
            <Spinner type="grow" color="primary" />
            <Spinner type="grow" color="secondary" />
            <Spinner type="grow" color="success" />
            <Spinner type="grow" color="danger" />
            <Spinner type="grow" color="warning" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="light" />
            <Spinner type="grow" color="dark" />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </Container>
  );
}
export default Preview;
