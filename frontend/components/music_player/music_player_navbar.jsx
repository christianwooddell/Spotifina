import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

class MusicPlayerNavBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        function dropDownButton() {
            const dropdown = document.getElementById("dropdownitems");
            dropdown.classList.toggle("show");
            window.onClick = function (e) {
                if (!e.target.matches(".dropDownButton")) {
                    if (dropdown.classList.contains("show")) {
                        downdwn.classList.remove("show");
                    }
                }
            }
        }


        const sessionLinks = () => (
            <header className="loggedinhead">
                <nav className="login-signup2">
                    <div href="/" className="musicnavbarlogo">
                        <FontAwesomeIcon icon={faSpotify} className="spotify-logo" />
                        <h4>Spotifina</h4>
                    </div>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/christian-wooddell/" id="navbarlink">LinkedIn</a></li>
                        <li><a href="https://github.com/christianwooddell" id="navbarlink">Github</a></li>
                        <li><a href="/" id="navbarlink">Portfolio</a></li>
                        <li>|</li>
                        <div className="dropdownitems">
                            <button onClick={dropDownButton} className="dropdownbtn">Profile</button>
                            <div id="myDropdown" className="dropdown-content">
                            </div>
                        </div>
                    </ul>
                </nav>
            </header>
        );


        return sessionLinks();
    }
}


export default MusicPlayerNavBar;