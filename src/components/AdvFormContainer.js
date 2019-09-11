import React, { Component } from "react";
import AdvForm from "./AdvForm";
import { connect } from "react-redux";
import { createAdv } from "../actions/action";

class AdvFormContainer extends Component {
  state = {
    title: "",
    description: "",
    picture: "",
    price: "",
    email: "",
    phone: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createAdv(this.state);
    this.setState({
      title: "",
      description: "",
      picture: "",
      price: "",
      email: "",
      phone: ""
    });
  };

  render() {
    return (
      <AdvForm
        values={this.state}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapDispatchToProps = { createAdv };

export default connect(
  null,
  mapDispatchToProps
)(AdvFormContainer);
