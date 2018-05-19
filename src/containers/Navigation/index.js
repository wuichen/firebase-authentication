import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Link, withRouter } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

//components
import SignOutButton from "../../components/SignOut";

//utils
import { auth } from "../../firebase";
import * as routes from "../../constants/routes";
import "./Navigation.css";

class Navigation extends Component {
  doSignOut = () => {
    return auth.signOut();
  };

  render() {
    const { pathname } = this.props.location;

    let hasLocalStorageUser = false;
    if (auth.currentUser === null) {
      hasLocalStorageUser = localStorage.getItem("authUser") ? true : false;
    }

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
            {hasLocalStorageUser || this.props.authUser !== null ? (
              <SignOutButton doSignOut={this.doSignOut} />
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
  authUser: state.session.authUser
});

export default compose(withRouter, connect(mapStateToProps))(Navigation);
