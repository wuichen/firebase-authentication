import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./PasswordForgetForm.css";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;
    this.props.resetPassword(email);
    this.setState(() => ({ ...INITIAL_STATE }));
    event.preventDefault();
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <div className="PasswordForgetForm">
        <Paper elevation={4} className="paper">
          <form onSubmit={this.onSubmit}>
            <Typography variant="headline" component="h1">
              Reset your password
            </Typography>
            <div>
              <TextField
                label="Email Address"
                className="textField"
                margin="normal"
                value={this.state.email}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("email", event.target.value)
                  )
                }
              />
            </div>
            <div>
              <br />
              <Button
                variant="raised"
                color="default"
                size="large"
                disabled={isInvalid}
                className="submit"
                type="submit"
              >
                Reset my password
              </Button>
            </div>
            <div className="error">{error && <p>{error.message}</p>}</div>
          </form>
        </Paper>
      </div>
    );
  }
}
PasswordForgetForm.propTypes = {
  resetPassword: PropTypes.func
};

export default PasswordForgetForm;
