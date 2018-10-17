import React, { Component } from "react";
import axios from "axios";

export default class Users extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    try {
      await axios.get("http://localhost:8000/users").then(response => {
        const users = response.data.users;

        this.setState({
          users
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { users } = this.state;
    console.log(users);

    return (
      <div className="container">
        <div className="row" key="23">
          {users}
        </div>
      </div>
    );
  }
}
