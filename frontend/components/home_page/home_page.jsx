import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import MusicPlayerNavBar from "../music_player/music_player_navbar";
import NowPlaying from "../music_player/now_playing_container";

const HomePage = ({ currentUser, logout }) => {
    const personalGreeting = () => (
        <div>
            <header className="homepage">
                <MusicPlayerNavBar />

                <button className="header-button" onClick={logout}>Log Out</button>

            </header>
            <footer>
                <NowPlaying />
            </footer>
        </div>

    );

    return personalGreeting();




}

export default HomePage;

