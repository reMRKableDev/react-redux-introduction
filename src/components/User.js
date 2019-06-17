import React, { Component } from "react";
//import axios from "axios";

/* 
    Connect allows access to this specific component to our redux state.

*/
import { connect } from "react-redux";
import { getUsers } from "../redux/actions/userAction";

class User extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const users = this.props.users.map(user => (
      <div key={user.id}>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <br />
      </div>
    ));
    return (
      <div>
        <h3>Users</h3>
        {users}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.items
});

export default connect(
  mapStateToProps,
  { getUsers }
)(User);
