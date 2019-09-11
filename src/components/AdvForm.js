import React, { Component } from "react";

export default class AdvForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <h3>Add advertisment</h3>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={this.props.values.title}
            onChange={this.props.onChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={this.props.values.description}
            onChange={this.props.onChange}
          />
        </label>
        <label>
          Picture URL:
          <input
            type="text"
            name="picture"
            value={this.props.values.picture}
            onChange={this.props.onChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={this.props.values.price}
            onChange={this.props.onChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={this.props.values.email}
            onChange={this.props.onChange}
          />
        </label>
        <label>
          Phone number:
          <input
            type="text"
            name="phone"
            value={this.props.values.phone}
            onChange={this.props.onChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}
