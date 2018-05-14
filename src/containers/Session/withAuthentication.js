import React from "react";
import { connect } from "react-redux";

//internals
import { setAuthUser } from "./actions";

//utils
import { auth } from "../../firebase";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentWillMount() {
      auth.onAuthStateChanged(authUser => {
        if (authUser) {
          localStorage.setItem("authUser", authUser.uid);
          this.props.onSetAuthUser(authUser);
        } else {
          localStorage.removeItem("authUser");
          this.props.onSetAuthUser(null);
        }
      });
    }

    render() {
      return <Component />;
    }
  }
  const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser => dispatch(setAuthUser(authUser))
  });
  return connect(null, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;
