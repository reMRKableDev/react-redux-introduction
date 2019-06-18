import React, { Component } from "react";
import PropTypes from "prop-types";

/* 
  getUsers() is the action used to add users from external api and change state.
*/
import { connect } from "react-redux";
import { getUsers } from "../redux/actions/userAction";

class User extends Component {
  /* 
    componentDidMount() is invoked immediately after 
    a component is mounted (inserted into the tree). 
  */
  componentDidMount() {
    this.props.getUsers(); // ACTION
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newUser) {
      this.props.users.unshift(nextProps.newUser);
    }
  }

  render() {
    const users = this.props.users.map((user, index) => (
      <div key={index}>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <br />
      </div>
    ));
    return (
      <div>
        <h1>Users</h1>
        {users}
      </div>
    );
  }
}

/* 
  - PropTypes exports a range of validators that can be used to make sure 
    the data you receive is valid. 
  - When an invalid value is provided for a prop, 
    a warning will be shown in the JavaScript console. 
*/

User.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired
};

/* 
  mapStateToProps() is used for selecting the part of the data from the store 
  that the connected component needs.

  - It is called every time the store state changes.
  - It receives the entire store state, 
  and should return an object of data this component needs.
*/
const mapStateToProps = state => ({
  users: state.users.items,
  newUser: state.users.item
});

/* 
  connect() connects a React component to a Redux store.

  - It provides its connected component with the pieces of the data it needs from the store, 
  and the functions it can use to dispatch actions to the store.
  - It does not modify the component class passed to it; instead, it returns a new, 
  connected component class that wraps the component you passed in.
*/
export default connect(
  mapStateToProps,
  { getUsers }
)(User);
