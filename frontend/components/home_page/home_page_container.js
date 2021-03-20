import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import HomePage from "./home_page";
import { logout } from "../../actions/session_actions";

const mapStateToProps = state => ({
    currentUser: users[sessionStorage.currentUserId]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));