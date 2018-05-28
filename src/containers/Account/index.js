import React from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import { connect } from "react-redux";
import { compose } from "recompose";

//components
import withAuthorization from "../../components/Session/withAuthorization";

//utils
import { auth } from "../../firebase";
import "./AccountPage.css";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class AccountPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;
    auth.currentUser
      .updatePassword(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <div className="AccountPage">
        <Paper elevation={4} className="paper">
          <form onSubmit={this.onSubmit}>
            <Typography variant="headline" component="h1">
              Change your password
            </Typography>
            <div>
              <TextField
                id="password"
                label="Password"
                type="password"
                className="textField"
                placeholder="Password"
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
                id="password"
                label="New Password"
                type="password"
                className="textField"
                placeholder="Confirm New Password"
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
                Reset My Password
              </Button>
            </div>
            {error && <p>{error.message}</p>}
          </form>
        </Paper>
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
