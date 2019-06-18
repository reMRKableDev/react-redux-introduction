import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addUser } from "../redux/actions/userAction";

class Form extends Component {
  // Constructor for this Form component
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email
    };

    this.props.addUser(user); // ACTION
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Add User</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Email: </label>
            <br />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  addUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { addUser }
)(Form);
