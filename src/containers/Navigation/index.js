import React, { Component } from "react";
import PropTypes from "prop-types";
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
import { isUserLogin } from "../../utils/webhelper";
import { signOut } from "./actions";
import * as routes from "../../constants/routes";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    const { pathname } = this.props.location;
    const isLogin = isUserLogin();
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
            {isLogin ? (
              <SignOutButton doSignOut={this.props.onSignOut} />
            ) : (
              signInButton
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
Navigation.propTypes = {
  onSignOut: PropTypes.func
};

const mapStateToProps = state => ({
  authUser: state.app.authUser
});

const mapDispatchToProps = dispatch => ({
  onSignOut: () => dispatch(signOut())
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Navigation);
