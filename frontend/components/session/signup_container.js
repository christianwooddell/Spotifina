import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signUp, clearSessionErrors } from "../../actions/session_actions";
import Signup from "./signup";


const mapDispatchToProps = dispatch => ({
    signup: formUser => dispatch(signUp(formUser)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(null, mapDispatchToProps)(Signup);