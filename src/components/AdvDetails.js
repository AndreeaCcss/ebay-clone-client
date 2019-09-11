import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdvForm from "./AdvForm";

export default class AdvDetails extends Component {
  render() {
    if (!this.props.adv) return "Loading...";

    return !this.props.editMode ? (
      <div>
        <Link to={`/advs/`}>Home</Link>
        <h2>{this.props.adv.title}</h2>
        <img src={this.props.adv.picture} alt={this.props.adv.title} />
        <p>Description: {this.props.adv.description}</p>
        <p>Price: {this.props.adv.price} euros</p>
        <h4>Contact</h4>
        <p>{this.props.adv.email}</p>
        <p>{this.props.adv.phone}</p>
        <button onClick={this.props.onDelete}>Delete</button>
        <button onClick={this.props.onEdit}>Edit</button>
      </div>
    ) : (
      <div>
        <Link to={`/advs/`}>Home</Link>

        <AdvForm
          values={this.props.formData}
          onChange={this.props.onChange}
          onSubmit={this.props.onSubmit}
        />
      </div>
    );
  }
}
