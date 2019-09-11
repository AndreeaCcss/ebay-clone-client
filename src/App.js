import React, { Component } from "react";
import "./App.css";
import AdvsContainer from "./components/AdvsContainer";
import AdvFormContainer from "./components/AdvFormContainer";
import AdvDetailsContainer from "./components/AdvDetailsContainer";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/advs" component={AdvsContainer} />
        <Route exact path="/advs" component={AdvFormContainer} />
        <Route exact path="/advs/:id" component={AdvDetailsContainer} />
      </div>
    );
  }
}

export default App;
