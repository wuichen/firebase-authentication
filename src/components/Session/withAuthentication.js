import React from "react";
import { connect } from "react-redux";

import { firebase } from "../../firebase";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.props.onSetAuthUser(authUser);
          localStorage.setItem("authUser", authUser.uid);
        } else {
          this.props.onSetAuthUser(null);
          localStorage.removeItem("authUser");
        }
      });
    }

    render() {
      return <Component />;
    }
  }
  const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser => dispatch({ type: "AUTH_USER_SET", authUser })
  });
  return connect(null, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;
