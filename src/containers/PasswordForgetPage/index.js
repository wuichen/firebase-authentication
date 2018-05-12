import React, { Component } from "react";

//components
import SignUpLink from "../../components/SignUpLink";
import PasswordForgetForm from "../../components/PasswordForgetForm";

//utils
import { auth } from "../../firebase";
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
