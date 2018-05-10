import React, { Component } from "react";
import Button from "material-ui/Button";
import { withRouter } from "react-router-dom";

import * as routes from "../../constants/routes";
import { auth } from "../../firebase";

class SignOutButton extends Component {
  signOut = event => {
    auth.doSignOut().then(result => {
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

export default withRouter(SignOutButton);
