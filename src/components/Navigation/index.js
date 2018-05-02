import React from "react";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

import AuthUserContext from "../Session/AuthUserContext";
import SignOutButton from "../SignOut";
import * as routes from "../../constants/routes";

import "./Navigation.css";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const Navigation = props => {
  return (
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <NavigationAuth {...props} />
        ) : (
          <NavigationNonAuth {...props} />
        )
      }
    </AuthUserContext.Consumer>
  );
};

const NavigationAuth = props => {
  const { classes } = props;
  return (
    <div className="NavigationNonAuth">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Firebase Full Auth
          </Typography>
          <Link to={routes.SIGN_IN} className="signIn">
            <SignOutButton />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const NavigationNonAuth = props => {
  const { classes } = props;
  return (
    <div className="NavigationNonAuth">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Firebase Full Auth
          </Typography>
          <Link to={routes.SIGN_IN} className="signIn">
            <Button variant="raised" color="default">
              Sign In
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navigation);
