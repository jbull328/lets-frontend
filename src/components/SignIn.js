import React from "react";
import { withRouter } from "react-router-dom";
import auth0Client from "../auth";

function SignIn(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace("/");
  };

  return (
    <div>
      {!auth0Client.isAuthenticated() && (
        <button className="login-signup" onClick={auth0Client.signIn}>
          Login
        </button>
      )}
      {auth0Client.isAuthenticated() && (
        <div className="portfolio-icon">
          <label className="portfolio-icon-label">
            {auth0Client.getProfile().name}
          </label>
          <button
            className="login-signup"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default withRouter(SignIn);
