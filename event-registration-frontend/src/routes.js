import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Event from "./components/Event";
import Register from "./components/Register"
import Confirmation from "./components/Confirmation"
import EventCreate from './components/EventCreate'
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Event} />
        <Route path="/events/register/:id" exact component={Register} />
        <Route path="/registration/:id" exact component={Confirmation} />
        <Route path="/events/create" exact component={EventCreate} />
        
      </Switch>
    </BrowserRouter>
  );
}