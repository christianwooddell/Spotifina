import React from "react";
import { connect } from "react-redux";
import HomePage from "./home_page";
import { withRouter } from "react-router-dom";
import { logout } from "../../actions/session_actions";

const mapStateToProps = state => ({
    currentUser: users[session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));