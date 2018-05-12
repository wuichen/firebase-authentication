import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Link, withRouter } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

import SignOutButton from "../SignOut";
import * as routes from "../../constants/routes";

import "./Navigation.css";

class Navigation extends Component {
  render() {
    const { pathname } = this.props.location;
    const signInButton = !pathname.includes("signin") ? (
      <Link to={routes.SIGN_IN} className="signIn">
        <Button variant="raised" color="default">
          Sign In
        </Button>
      </Link>
    ) : null;

    return (
      <div className="Navigation">
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="title" color="inherit" className="title">
              <Link to={routes.LANDING} className="signIn">
                Firebase Full Auth
              </Link>
            </Typography>
            {localStorage.getItem("authUser") !== null ||
            this.props.authUser !== null ? (
              <SignOutButton />
            ) : (
              signInButton
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default compose(withRouter, connect(mapStateToProps))(Navigation);
