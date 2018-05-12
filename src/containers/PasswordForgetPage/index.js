import React, { Component } from "react";
import { auth } from "../../firebase";
import { SignUpLink } from "../SignUp";

import PasswordForgetForm from "../../components/PasswordForgetForm";

import "./PasswordForgetPage.css";

class PasswordForgetPage extends Component {
  render() {
    return (
      <div className="PasswordForgetPage">
        <PasswordForgetForm doPasswordReset={auth.doPasswordReset} />
        <SignUpLink />
      </div>
    );
  }
}

export default PasswordForgetPage;
