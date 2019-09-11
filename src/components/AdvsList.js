import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdvsList extends Component {
  render() {
    return (
      <div>
        {this.props.advs
          ? this.props.advs.map(adv => (
              <div>
                <Link
                  to={`/advs/${adv.id}`}
                >{`${adv.title}, ${adv.price}`}</Link>
              </div>
            ))
          : null}
      </div>
    );
  }
}
