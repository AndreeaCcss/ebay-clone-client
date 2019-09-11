import React, { Component } from "react";
import { connect } from "react-redux";
import { loadAdv, deleteAdv, editAdv } from "../actions/action";
import AdvDetails from "./AdvDetails";

class AdvDetailsContainer extends Component {
  state = { editMode: false };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.loadAdv(id);
  };

  onDelete = () => {
    this.props.deleteAdv(this.props.adv.id);
    this.props.history.push("/advs");
  };

  onEdit = () => {
    const adv = this.props.adv;
    this.setState({
      editMode: true,
      formData: {
        title: adv.title,
        description: adv.description,
        price: adv.price,
        picture: adv.picture,
        email: adv.email,
        phone: adv.phone
      }
    });
  };

  onChange = event => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      editMode: false
    });
    this.props.editAdv(this.props.adv.id, this.state.formData);
  };

  render() {
    return (
      <AdvDetails
        adv={this.props.adv}
        onDelete={this.onDelete}
        onEdit={this.onEdit}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        editMode={this.state.editMode}
        formData={this.state.formData}
      />
    );
  }
}

const mapStateToProps = state => ({
  adv: state.adv
});
export default connect(
  mapStateToProps,
  { loadAdv, deleteAdv, editAdv }
)(AdvDetailsContainer);
