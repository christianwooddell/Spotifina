import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from "@fortawesome/free-brands-svg-icons";


const NavBar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <FontAwesomeIcon icon={faSpotify} className="spotify-logo" />
            <Link to="/login">Log in.</Link>
            <Link to="/signup">Sign up.</Link>
        </nav>
    );

    const personalGreeting = () => (
        <hgroup className="header-group">
            <FontAwesomeIcon icon={faSpotify} className="spotify-logo" />
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}


export default NavBar;
   