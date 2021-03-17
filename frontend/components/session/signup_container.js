import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../../actions/session_actions";
import Signup from "./signup";


const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(signUp(formUser)),
});

export default connect(null, mapDispatchToProps)(Signup);