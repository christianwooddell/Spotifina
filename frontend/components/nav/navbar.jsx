import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from "@fortawesome/free-brands-svg-icons";


const NavBar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <header>
        <nav className="login-signup">
            <div href="/" className="navbarlogo">
                <FontAwesomeIcon icon={faSpotify} className="spotify-logo" />
                <h4>Spotifina</h4>
            </div>
            <ul>
                <li><a href="https://www.linkedin.com/in/christian-wooddell/" id="navbarlink">LinkedIn</a></li>
                <li><a href="https://github.com/christianwooddell" id="navbarlink">Github</a></li>
                <li><a href="/" id="navbarlink">Portfolio</a></li>
                <li>|</li>
                <li><Link to="/signup" id="navbarlink">Sign up</Link></li>
                <li><Link to="/login" id="navbarlink">Log in</Link></li>
            </ul>
        </nav>
        </header>
    );

    const personalGreeting = () => (
        <header>
        <hgroup className="header-group">
            <FontAwesomeIcon icon={faSpotify} className="spotify-logo" />
            <h4>Spotifina</h4>
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
        </header>
    );
    
    return currentUser ? personalGreeting() : sessionLinks();
}


export default NavBar;
   