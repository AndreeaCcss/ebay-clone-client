import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import AdvsContainer from "./components/AdvsContainer";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AdvsContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
