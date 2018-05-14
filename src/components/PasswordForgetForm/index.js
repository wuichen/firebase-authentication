import React, { Component } from "react";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";

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
    this.props
      .doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

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

export default PasswordForgetForm;
