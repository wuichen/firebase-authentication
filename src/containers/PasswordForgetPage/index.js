import React, { Component } from "react";

//components
import SignUpLink from "../../components/SignUpLink";
import PasswordForgetForm from "../../components/PasswordForgetForm";

//utils
import { auth } from "../../firebase";
import "./PasswordForgetPage.css";

class PasswordForgetPage extends Component {
  doPasswordReset = email => {
    return auth.sendPasswordResetEmail(email);
  };

  render() {
    return (
      <div className="PasswordForgetPage">
        <PasswordForgetForm doPasswordReset={this.doPasswordReset} />
        <SignUpLink />
      </div>
    );
  }
}

export default PasswordForgetPage;
