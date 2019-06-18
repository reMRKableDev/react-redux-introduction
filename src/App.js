import React, { Component } from "react";
import "./App.css";
import User from "./components/User";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <User />
      </div>
    );
  }
}

export default App;
