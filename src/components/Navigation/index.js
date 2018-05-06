import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

import SignOutButton from "../SignOut";
import * as routes from "../../constants/routes";

import { auth } from "../../firebase";

import "./Navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: localStorage.getItem("authUser")
    };
  }

  componentWillReceiveProps(nextProps) {
    if (auth.currentUser() !== null) {
      this.setState({
        authUser: !localStorage.getItem("authUser") && auth.currentUser().uid
      });
    }
  }

  render() {
    return (
      <div className="Navigation">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className="title">
              Firebase Full Auth
            </Typography>
            {this.state.authUser !== null ? (
              <SignOutButton />
            ) : (
              <Link to={routes.SIGN_IN} className="signIn">
                <Button variant="raised" color="default">
                  Sign In
                </Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navigation;
