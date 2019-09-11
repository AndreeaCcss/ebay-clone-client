import React, { Component } from "react";

export default class AdvsList extends Component {
  render() {
    return (
      <div>
        {this.props.advs
          ? this.props.advs.map(adv => `${adv.title}, ${adv.price}`)
          : null}
      </div>
    );
  }
}
