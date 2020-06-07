import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "reactstrap/lib/Spinner";
import Preview from "./Preview";

function Register({ history }) {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [registrationType, setregistrationType] = useState("Self");
  const [tickets, setTickets] = useState("1");
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [idcard, setIdcard] = useState("idcard");
  const [previewData, setPreviewData] = useState({});
  const [ispreview, setIspreview] = useState(false);

  let event_id = useParams();

  //handle the submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      email !== "" &&
      name !== "" &&
      mobileNo !== "" &&
      registrationType !== "" &&
      tickets !== ""
    ) {
      let eventData = {
        name: name,
        email: email,
        mobileNo: mobileNo,
        registrationType: registrationType,
        tickets: tickets,
        event_id:event_id
      };
      setPreviewData(eventData);
      setIspreview(true);

      setSubmitting(true);
           const event = event_id.id;
    
    }
  };

  
  return (
    <div>
      {ispreview ? (
        <div>
          <Preview props={previewData} />{" "}
        </div>
      ) : (
        <Container>
          <div>
            <Form onSubmit={handleSubmit}>
              <h2>Register</h2>
              <FormGroup>
                <Label for="fullName">Name</Label>
                <Input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  placeholder="Enter your full name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="mobileNumber">Mobile Number</Label>
                <Input
                  type="text"
                  name="mobileNumber"
                  id="mobileNumber"
                  value={mobileNo}
                  onChange={(event) => setMobileNo(event.target.value)}
                  required
                  placeholder="+91 1234567890"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleNumber">No. Of Tickets</Label>
                <Input
                  type="number"
                  name="number"
                  id="exampleNumber"
                  onChange={(event) => setTickets(event.target.value)}
                  value={tickets}
                  placeholder="number placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="registrationType">Registration Type</Label>
                <Input
                  type="select"
                  name="select"
                  id="registrationType"
                  value={registrationType}
                  onChange={(event) => setregistrationType(event.target.value)}
                >
                  <option>Self</option>
                  <option>Group</option>
                  <option>Corporate</option>
                  <option>Others</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Button>Submit</Button>
              </FormGroup>
            </Form>
          </div>
          
        </Container>
      )}
    </div>
  );
}

export default Register;
