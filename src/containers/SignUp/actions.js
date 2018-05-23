import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED
} from "./constants";

export function createUser(id, username, email) {
  return {
    type: CREATE_USER,
    id,
    username,
    email
  };
}

export function createUserSuccess() {
  return {
    type: CREATE_USER_SUCCESS
  };
}

export function createUserFailed(err) {
  return {
    type: CREATE_USER_FAILED,
    err
  };
}
