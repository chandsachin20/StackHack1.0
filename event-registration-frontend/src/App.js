import React from "react";
import { Container } from "reactstrap";
import "./App.css";
import Routes from "./routes";

function App() {
  return (
    <Container>
      <h2>Event Registration</h2>
      <div className="content">
        <Routes />
      </div>
    </Container>
  );
}

export default App;
