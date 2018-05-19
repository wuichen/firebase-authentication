import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import { withRouter } from "react-router-dom";

import { auth } from "../../firebase";
import * as routes from "../../constants/routes";

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentWillMount() {
      if (auth.currentUser === null) {
        const hasLocalStorageUser =
          localStorage.getItem("authUser") !== null ? true : false;
        if (!hasLocalStorageUser) this.props.history.push(routes.SIGN_IN);
      }

      auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }
      });
    }

    render() {
      return this.props.authUser ? <Component /> : null;
    }
  }

  const mapStateToProps = state => ({
    authUser: state.session.authUser
  });

  return compose(withRouter, connect(mapStateToProps))(WithAuthorization);
};

export default withAuthorization;
