import { SET_USERS } from "./constants";

const INITIAL_STATE = {
  users: {}
};

const applySetUsers = (state, action) => ({
  ...state,
  users: action.users
});

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USERS: {
      return applySetUsers(state, action);
    }
    default:
      return state;
  }
}

export default userReducer;
