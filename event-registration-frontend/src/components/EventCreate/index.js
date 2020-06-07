import React, { useState} from "react";
import { Form, FormGroup,Button, Label, Input, FormText } from "reactstrap";
import axios from "axios";

function EventCreate({ history }) {

    const [title, settitle] = useState('');

    const [venue, setvenue] = useState('');
    const [date, setdate] = useState('');
    const [description, setdescription] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [messgae, setMessgae] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    if (
      title !== "" &&
      venue !== "" &&
      date !== "" &&
      description !== "" 
    ){
        //date = date.toString();
        axios.post("http://localhost:8000/event/create", {
            title,venue,
            date, description
        }).then(( res)=>{
            const event_id = res.data._id;
            setIsSuccess(true);
            history.push('/');
        }).catch( (err)=> {
            console.log("error");
        })
    }
    else{
        setMessgae('fields are empty');
    }

    }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="titke">Event Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={ (event)=> settitle(event.target.value)}
            placeholder="with a placeholder"
          />
        </FormGroup>

        <FormGroup>
          <Label for="eventDate">Date</Label>
          <Input
            type="date"
            name="date"
            id="eventDate"
            value={date}
            onChange={(event)=> setdate(event.target.value)}
            placeholder="date placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Description">Description</Label>
          <Input
            type="text"
            name="description"
            id="Description"
            value={description}
            onChange={(event) => setdescription(event.target.value)}
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Venue">Venue</Label>
          <Input
            type="text"
            name="Venue"
            id="Venue"
            value={venue}
            onChange={ (event) => setvenue(event.target.value)}
            placeholder="with a placeholder"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default EventCreate;
