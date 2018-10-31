import React, { Component } from "react";
import auth0Client from "../auth";
import axios from "axios";

import { updateUser } from "../actions/userActions";
import { connect } from "react-redux";

class UpdateProfile extends Component {
  state = {
    userName: "",
    userEmail: "",
    userTagline: "",
    userAvatar: ""
  };

  handleChange = async event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const { userName, userEmail, userTagline, userAvatar } = this.state;

      await axios
        .post(`http://localhost:8000/user/updateprofile`, {
          userName,
          userEmail,
          userTagline,
          userAvatar
        })

        .then(res => {
          console.log(res);
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  async componentDidMount() {}

  render() {
    const { userName, userEmail, userTagline, userAvatar } = this.state;
    return (
      <div>
        <form className="user-profile-edit" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="Full Name"
            value={userName}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="userEmail"
            placeholder="email"
            value={userEmail}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="userTagline"
            placeholder="About You"
            value={userTagline}
            onChange={this.handleChange}
          />
          <input
            type="file"
            name="userAvatar"
            placeholder="Avatar"
            value={userAvatar}
            onChange={this.handleChange}
          />
          <input type="submit" name="userSubmit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  onUpdateUser: updateUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(UpdateProfile);
