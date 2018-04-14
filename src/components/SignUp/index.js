import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";

import { auth, db } from "../../firebase";
import * as routes from "../../constants/routes";

import "./SignUp.css";

const SignUpPage = ({ history }) => (
  <div className="SignUp">
    <SignUpForm history={history} />
  </div>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db
          .doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName("error", error));
          });
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      username === "" ||
      email === "";

    return (
      <Paper elevation={4} className="paper">
        <form onSubmit={this.onSubmit}>
          <div>
            <Typography variant="headline" component="h1">
              Create new account
            </Typography>
          </div>
          <div>
            <TextField
              id="username"
              label="username"
              className="textField"
              margin="normal"
              value={username}
              onChange={event =>
                this.setState(
                  updateByPropertyName("username", event.target.value)
                )
              }
            />
          </div>
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
              id="passwordOne"
              label="Password"
              type="password"
              className="textField"
              autoComplete="current-password"
              margin="normal"
              value={passwordOne}
              onChange={event =>
                this.setState(
                  updateByPropertyName("passwordOne", event.target.value)
                )
              }
            />
          </div>
          <div>
            <TextField
              id="passwordtwo"
              label="Password"
              type="password"
              className="textField"
              autoComplete="current-password"
              margin="normal"
              value={passwordTwo}
              onChange={event =>
                this.setState(
                  updateByPropertyName("passwordTwo", event.target.value)
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
              Sign Up
            </Button>
          </div>
          <div className="error">{error && error.message}</div>
        </form>
      </Paper>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };
