import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

import AuthUserContext from "../Session/AuthUserContext";
import SignOutButton from "../SignOut";
import * as routes from "../../constants/routes";

import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className="title">
              Firebase Full Auth
            </Typography>
            <AuthUserContext.Consumer>
              {authUser =>
                authUser ? (
                  <SignOutButton />
                ) : (
                  <Link to={routes.SIGN_IN} className="signIn">
                    <Button variant="raised" color="default">
                      Sign In
                    </Button>
                  </Link>
                )
              }
            </AuthUserContext.Consumer>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navigation;
