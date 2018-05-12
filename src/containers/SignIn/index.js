import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { SignUpLink } from "../SignUp";
import SignInForm from "../../components/SignInForm";
import PasswordForgetLink from "../../components/PasswordForgetLink";
import { auth } from "../../firebase";

import "./SignIn.css";

class SignInPage extends Component {
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
