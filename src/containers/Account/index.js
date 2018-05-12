import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import PasswordForgetForm from "../../components/PasswordForgetForm";
import PasswordChangeForm from "../../components/PasswordChange";
import withAuthorization from "../Session/withAuthorization";

import "./AccountPage.css";

const AccountPage = ({ authUser }) => (
  <div className="AccountPage">
    <h1>Account: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);
