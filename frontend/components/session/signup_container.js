import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../../actions/session_actions";
import Signup from "./signup";


// const mapStateToProps = state => ({
//     errors: state.errors.session,
//     formTitle: "GET SPOTIFINA FREE",
//     formType: "Sign up",
//     initialState: {
//         email: "",
//         password: "",
//         username: "",
//         birthday: "",
//         gender: "",
//     }
// });

const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(signUp(formUser)),
});

export default connect(null, mapDispatchToProps)(Signup);