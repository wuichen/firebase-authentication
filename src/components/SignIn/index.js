import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { auth } from "../../firebase";
import * as routes from "../../constants/routes";
import firebaseLog from "../../assets/firebase.svg";

import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";

import googleIcon from "../../assets/google.svg";
import githubIcon from "../../assets/github.svg";

import "./SignIn.css";

const SignInPage = ({ history }) => (
  <div className="SignIn">
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
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
              <img src={googleIcon} alt="google" />
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

export default withRouter(SignInPage);

export { SignInForm };
