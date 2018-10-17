import React, { Component } from "react";
import auth0Client from "../auth";
import axios from "axios";

export default class UpdateProfile extends Component {
  state = {
    user: {}
  };

  handleChange = event => {
    this.setState({ user: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const UpdatedUser = {
      user: this.state.user
    };
  };
  //   async axios.post(http://localhost:8000/user/update)
  // }
  // async componentDidMount() {}

  render() {
    return (
      <div>
        <form>
          <input type="text" name="user-name" placeholder="Full Name" />
          <input type="email" name="user-email" placeholder="email" />
          <input type="text" name="user-tagline" placeholder="About You" />
          <input type="file" name="user-avatar" placeholder="Avatar" />
          <input type="submit" name="user-submit" />
        </form>
      </div>
    );
  }
}
