import React, { Component } from "react";
import Button from "material-ui/Button";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import * as routes from "../../constants/routes";

class SignOutButton extends Component {
  signOut = event => {
    this.props.doSignOut().then(result => {
      this.props.history.push(routes.SIGN_IN);
    });
  };

  render() {
    return (
      <Button
        variant="raised"
        color="default"
        type="button"
        onClick={this.signOut}
      >
        Sign Out
      </Button>
    );
  }
}

SignOutButton.propTypes = {
  doSignOut: PropTypes.func
};

export default withRouter(SignOutButton);
