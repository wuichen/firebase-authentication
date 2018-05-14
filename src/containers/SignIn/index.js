import React, { Component } from "react";
import { withRouter } from "react-router-dom";

//components
import SignUpLink from "../../components/SignUpLink";
import SignInForm from "../../components/SignInForm";
import PasswordForgetLink from "../../components/PasswordForgetLink";

//utils
import firebase, { auth } from "../../firebase";
import * as routes from "../../constants/routes";
import "./SignIn.css";

class SignInPage extends Component {
  componentWillMount() {
    if (auth.currentUser === null) {
      const hasLocalStorageUser =
        localStorage.getItem("authUser") !== null ? true : false;
      if (hasLocalStorageUser) this.props.history.push(routes.HOME);
    }
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.props.history.push(routes.HOME);
      }
    });
  }

  doSignInWithEmailAndPassword = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  };

  render() {
    return (
      <div className="SignIn">
        <SignInForm
          history={this.props.history}
          doSignInWithEmailAndPassword={this.doSignInWithEmailAndPassword}
          signInWithGoogle={this.signInWithGoogle}
        />
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    );
  }
}

export default withRouter(SignInPage);
