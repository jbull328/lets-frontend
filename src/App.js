import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Projects from "./components/Projects";
import About from "./components/About";
import Landing from "./components/Landing";
import GetInvolved from "./components/GetInvolved";
import createHistory from "history/createBrowserHistory";
import ReactGA from "react-ga";
import Callback from "./components/Callback";
import SignIn from "./components/SignIn";
import SecuredRoute from "./SecuredRoute/SecuredRoute";

//added history to allow for analytics
const history = createHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

class App extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header container">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="brand container">
              <h1 className="App-title">
                Learn to make UI components, and work with Data!
              </h1>
              <h3 className="App-title">Let's Front End!</h3>
            </div>
            <SignIn />
            <div className="nav">
              <Link to="/" component={Landing}>
                Home
              </Link>
              <hr />
              <Link to="/about" component={About}>
                About
              </Link>
              <hr />
              <Link to="/projects" component={Projects}>
                Projects
              </Link>
              <hr />
            </div>
          </header>

          <Switch history={history}>
            <Route exact path="/" component={Landing} />
            <SecuredRoute path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/getInvolved" component={GetInvolved} />
            <Route exact path="/callback" component={Callback} />
          </Switch>

          <footer className="footer">
            <a href="https://jbull.co">About the creator</a>

            <a href="https://www.freepik.com/free-vector/universe-background-with-astronaut-on-a-planet_1252976.htm">
              Background Designed by Freepik
            </a>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
