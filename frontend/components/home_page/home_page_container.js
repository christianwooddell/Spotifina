import React from "react";
import { connect } from "react-redux";
import HomePage from "./home_page";
import { logout } from "../../actions/session_actions";

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users.id
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);