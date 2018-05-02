import React from "react";
import Button from "material-ui/Button";

import { auth } from "../../firebase";

const SignOutButton = () => (
  <Button
    variant="raised"
    color="default"
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </Button>
);

export default SignOutButton;
