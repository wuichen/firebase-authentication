import React, { Component } from "react";
import { withRouter } from "react-router-dom";

//components
import SignUpLink from "../../components/SignUpLink";
import SignInForm from "../../components/SignInForm";
import PasswordForgetLink from "../../components/PasswordForgetLink";

//utils
import { firebase, auth } from "../../firebase";
import * as routes from "../../constants/routes";
import "./SignIn.css";

class SignInPage extends Component {
  componentWillMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.props.history.push(routes.HOME);
      }
    });
  }

  render() {
    return (
      <div className="SignIn">
        <SignInForm history={this.props.history} auth={auth} />
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    );
  }
}

export default withRouter(SignInPage);
