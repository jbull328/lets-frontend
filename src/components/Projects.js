import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import ReactGA from "react-ga";
import Profile from "./Profile";
import CurrentStage from "./CurrentStage";
import auth0Client from "../auth";
import UpdateProfile from "../users/UpdateProfile";

const history = createHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

class Projects extends Component {
  render() {
    return (
      <nav>
        <div className="secondary-nav">
          <Link to="/projects/profile" component={Profile}>
            Profile
          </Link>
          <Link to="/projects/currentStage" component={CurrentStage}>
            Current Stage
          </Link>
          <div className="top-section">
            <h3> {auth0Client.getProfile().name}</h3>
            <img className="avatart" src="#" />
            <Link to="/projects/:id/updateprofile" component={UpdateProfile}>
              Edit Profile
            </Link>
          </div>
        </div>
        <Switch history={history}>
          <Route path="/projects/profile" component={Profile} />
          <Route path="/projects/currentStage" component={CurrentStage} />
          <Route path="/projects/:id/updateprofile" component={UpdateProfile} />
        </Switch>
      </nav>
    );
  }
}

export default Projects;
