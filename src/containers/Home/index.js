import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

//components
import withAuthorization from "../../components/Session/withAuthorization";

//utils
import { db } from "../../firebase";
import "./Home.css";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot => this.props.onSetUsers(snapshot.val()));
  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        {!!this.props.users && <UserList users={this.props.users} />}
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key => <div key={key}>{users[key].username}</div>)}
  </div>
);

const mapStateToProps = state => ({
  users: state.userState.users
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: "USERS_SET", users })
});

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);