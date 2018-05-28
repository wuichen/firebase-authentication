import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

//components
import PasswordForgetForm from "../../components/PasswordForgetForm";
import PasswordChangeForm from "../../components/PasswordChange";
import withAuthorization from "../../components/Session/withAuthorization";

//utils
import "./AccountPage.css";

class AccountPage extends React.Component {
  render() {
    return (
      <div className="AccountPage">
        <h1>Account: {this.props.authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.app.authUser
});

export default compose(withAuthorization(), connect(mapStateToProps))(
  AccountPage
);
