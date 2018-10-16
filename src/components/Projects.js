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

const history = createHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

class Projects extends Component {
  render() {
    return (
      <nav>
        <div className="topSection">
          <Link to="/projects/profile" component={Profile}>
            Profile
          </Link>
          <Link to="/projects/currentStage" component={CurrentStage}>
            Current Stage
          </Link>
          <h2>Projects</h2>
        </div>
        <Switch history={history}>
          <Route path="/projects/profile" component={Profile} />
          <Route path="/projects/currentStage" component={CurrentStage} />
        </Switch>
      </nav>
    );
  }
}

export default Projects;
