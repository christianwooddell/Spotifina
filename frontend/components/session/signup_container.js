import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login, signUp, clearSessionErrors } from "../../actions/session_actions";
import Signup from "./signup";

const mapStateToProps = state => ({
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    signup: formUser => dispatch(signUp(formUser)),
    login: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);