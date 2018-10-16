import React, { Component } from "react";

export default class NewUser extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="user-name" placeholder="Full Name" />
          <input type="email" name="user-email" placeholder="email" />
          <input type="text" name="user-tagline" placeholder="About You" />
          <input type="file" name="user-avatar" placeholder="Avatar" />
          <input type="submit" name="user-submit">
            Submit
          </input>
        </form>
      </div>
    );
  }
}
