import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "material-ui/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import blue from "material-ui/colors/blue";
import red from "material-ui/colors/red";

//containers
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForgetPage";
import HomePage from "../Home";
import AccountPage from "../Account";

//utils
import * as routes from "../../constants/routes";
import "./index.css";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red
  }
});

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Router>
            <div className="app">
              <header>
                <Navigation />
              </header>
              <main>
                <Route
                  exact
                  path={routes.LANDING}
                  component={() => <LandingPage />}
                />
                <Route
                  exact
                  path={routes.SIGN_UP}
                  component={() => <SignUpPage />}
                />
                <Route
                  exact
                  path={routes.SIGN_IN}
                  component={() => <SignInPage />}
                />
                <Route
                  exact
                  path={routes.PASSWORD_FORGET}
                  component={() => <PasswordForgetPage />}
                />
                <Route
                  exact
                  path={routes.HOME}
                  component={() => <HomePage />}
                />
                <Route
                  exact
                  path={routes.ACCOUNT}
                  component={() => <AccountPage />}
                />
              </main>
            </div>
          </Router>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.app.authUser
});

export default compose(connect(mapStateToProps))(App);
