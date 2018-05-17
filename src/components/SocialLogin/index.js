import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import * as routes from "../../constants/routes";
import googleIcon from "../../assets/google.svg";
import facebookIcon from "../../assets/facebook.svg";
import "./SocialLogin.css";

class SocialLogin extends Component {
  signOut = event => {
    this.props.doSignOut().then(result => {
      this.props.history.push(routes.SIGN_IN);
    });
  };

  render() {
    return (
      <div className="SocialLogin">
        <p>You can also sign in via</p>
        <img
          src={googleIcon}
          alt="google"
          onClick={this.props.signInWithGoogle}
        />
        <img
          src={facebookIcon}
          alt="facebook"
          onClick={this.props.signInWithFacebook}
        />
      </div>
    );
  }
}

SocialLogin.propTypes = {
  signInWithGoogle: PropTypes.func,
  signInWithFacebook: PropTypes.func
};

export default withRouter(SocialLogin);
