import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "recompose";

//components
import SignUpLink from "../../components/SignUpLink";
import PasswordForgetForm from "../../components/PasswordForgetForm";

//utils
import "./ResetPassword.css";
import { resetPassword } from "./actions";

class ResetPassword extends Component {
  render() {
    return (
      <div className="ResetPassword">
        <PasswordForgetForm resetPassword={this.props.onResetPassword} />
        <SignUpLink />
      </div>
    );
  }
}
ResetPassword.propTypes = {
  onResetPassword: PropTypes.func
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onResetPassword: email => dispatch(resetPassword(email))
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  ResetPassword
);
