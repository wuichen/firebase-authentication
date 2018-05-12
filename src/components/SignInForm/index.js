import React, { Component } from "react";
import PropTypes from "prop-types";

import * as routes from "../../constants/routes";

import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";

import firebaseLog from "../../assets/firebase.svg";
import googleIcon from "../../assets/google.svg";
import githubIcon from "../../assets/github.svg";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  googleSignIn = event => {
    this.props.auth
      .signInWithGoogle()
      .then(result => {
        if (result.user) {
          this.props.history.push(routes.HOME);
        }
      })
      .catch(err => {
        this.setState(updateByPropertyName("error", err));
      });
    event.preventDefault();
  };

  onSubmit = event => {
    const { email, password } = this.state;

    const { history } = this.props;

    this.props.auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(routes.HOME);
      })
      .catch(error => {
        localStorage.removeItem("authUser");
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <Paper elevation={4} className="paper">
        <form onSubmit={this.onSubmit}>
          <img src={firebaseLog} alt="" width="100" height="100" />
          <Typography variant="headline" component="h1">
            Please sign in
          </Typography>
          <div>
            <TextField
              id="email"
              label="Email Address"
              className="textField"
              margin="normal"
              value={email}
              onChange={event =>
                this.setState(updateByPropertyName("email", event.target.value))
              }
            />
          </div>
          <div>
            <TextField
              id="password"
              label="Password"
              type="password"
              className="textField"
              autoComplete="current-password"
              margin="normal"
              value={password}
              onChange={event =>
                this.setState(
                  updateByPropertyName("password", event.target.value)
                )
              }
            />
          </div>
          <div>
            <div className="socialLogin">
              <p>You can also sign in via</p>
              <img src={googleIcon} alt="google" onClick={this.googleSignIn} />
              <img src={githubIcon} alt="github" />
            </div>
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
              Sign in
            </Button>
          </div>
          <div className="error">{error && error.message}</div>
        </form>
      </Paper>
    );
  }
}

SignInForm.propTypes = {
  history: PropTypes.object,
  auth: PropTypes.object
};

export default SignInForm;
