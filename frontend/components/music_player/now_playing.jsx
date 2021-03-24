import React from "react";
import { connect } from "react-redux";
import { getSong } from "../../actions/song_actions";
import { fetchSongs } from "../../util/song_api_util";
// import { currentSong } from "./now_playing_container";
import { playCurrentSong } from "../../actions/player_actions"


class NowPlaying extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // playStatus: true,
            // muted: false,
            // currentTime = 0,
            // volume = 50

        }
        // this.playAudio = this.playAudio.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.togglePlay = this.togglePlay.bind(this);

    }

    // componentDidUpdate

    // playAudio() {

    // }
    // updateTime(timestamp) {
    //     timestamp = Math.floor(timestamp);
    //     this.setState({ currentTime: timestamp });
    // }

    // togglePlay() {
    //     let playing = this.state.playStatus;
    //     let audio = this.controls.current;

    //     if (!this.props.currentSong) {
    //         playing = true;
    //         this.setState({ playStatus: playing });
    //         return;
    //     }

    //     if (playing === true) {
    //         playing = false;
    //         this.playAudio();
    //     } else {
    //         playing = true;
    //         audio.pause();
    //     }
    //     this.setState({ playStatus: playing })
    // }

    // playAudio() {
    //     let audio = this.controls.current;
    //     let playing = false;
    //     audio.play();
        
    //     this.setState({ playStatus: playing })
    // }


    render() {
        const { currentSong } = this.props;
        const { audio_url } = currentSong;
        return (
            <div className="nowplayingcontainer">
                <audio controls className="nowplaying">
                    <source src={audio_url} />
                </audio>

            </div>
        )
    }

}


export default NowPlaying;