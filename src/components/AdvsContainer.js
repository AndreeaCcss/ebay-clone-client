import React, { Component } from "react";
import { fetchAdvs } from "../actions/action";
import { connect } from "react-redux";
import AdvsList from "./AdvsList";
class AdvsContainer extends Component {
  componentDidMount() {
    this.props.fetchAdvs();
  }
  render() {
    return <AdvsList advs={this.props.advs} />;
  }
}
function mapStateToProps(state) {
  return { advs: state.advs };
}

const mapDispatchToProps = { fetchAdvs };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvsContainer);
