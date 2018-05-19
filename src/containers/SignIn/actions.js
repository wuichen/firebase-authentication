import {
  SIGN_IN_WITH_GOOGLE,
  SIGN_IN_WITH_GOOGLE_SUCCESS,
  SIGN_IN_WITH_GOOGLE_FAILED,
  SIGN_IN_WITH_FACEBOOK,
  SIGN_IN_WITH_FACEBOOK_SUCCESS,
  SIGN_IN_WITH_FACEBOOK_FAILED
} from "./constants";

export function signInWithGoogle() {
  return {
    type: SIGN_IN_WITH_GOOGLE
  };
}

export function signInWithGoogleSuccess(user) {
  return {
    type: SIGN_IN_WITH_GOOGLE_SUCCESS,
    user
  };
}

export function signInWithGoogleFailed(err) {
  return {
    type: SIGN_IN_WITH_GOOGLE_FAILED,
    err
  };
}

export function signInWithFacebook() {
  return {
    type: SIGN_IN_WITH_FACEBOOK
  };
}

export function signInWithFacebookSuccess(user) {
  return {
    type: SIGN_IN_WITH_FACEBOOK_SUCCESS,
    user
  };
}

export function signInWithFacebookFailed(err) {
  return {
    type: SIGN_IN_WITH_FACEBOOK_FAILED,
    err
  };
}
