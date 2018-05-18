import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";

//components
import SignUpLink from "../../components/SignUpLink";
import PasswordForgetLink from "../../components/PasswordForgetLink";
import SocialLogin from "../../components/SocialLogin";

//utils
import firebase, { auth } from "../../firebase";
import * as routes from "../../constants/routes";
import "./SignIn.css";

import firebaseLog from "../../assets/firebase.svg";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentWillMount() {
    if (auth.currentUser === null) {
      const hasLocalStorageUser =
        localStorage.getItem("authUser") !== null ? true : false;
      if (hasLocalStorageUser) this.props.history.push(routes.HOME);
    }
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.props.history.push(routes.HOME);
      }
    });
  }

  doSignInWithEmailAndPassword = event => {
    const { email, password } = this.state;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        this.props.history.push(routes.HOME);
      })
      .catch(error => {
        localStorage.removeItem("authUser");
      });

    event.preventDefault();
  };

  signInWithGoogle = event => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
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

  signInWithFacebook = event => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth
      .signInWithPopup(provider)
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

  signInWithTwitter = event => {
    const provider = new firebase.auth.TwitterAuthProvider();
    auth
      .signInWithPopup(provider)
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

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className="SignIn">
        <Paper elevation={4} className="paper">
          <form onSubmit={this.doSignInWithEmailAndPassword}>
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
                  this.setState(
                    updateByPropertyName("email", event.target.value)
                  )
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
              <SocialLogin
                signInWithGoogle={this.signInWithGoogle}
                signInWithFacebook={this.signInWithFacebook}
                signInWithTwitter={this.signInWithTwitter}
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
                Sign in
              </Button>
            </div>
            <div className="error">{error && error.message}</div>
          </form>
        </Paper>
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    );
  }
}

export default withRouter(SignInPage);
