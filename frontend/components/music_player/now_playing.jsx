import React from "react";
import { getSong } from "../../actions/song_actions";
import { fetchSongs } from "../../util/song_api_util";
import { currentSong } from "./now_playing_container";
import { playCurrentSong } from "../../actions/player_actions"


class NowPlaying extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playStatus: true,
            // muted: false,
            // currentTime = 0,
            // volume = 50

        }
        this.controls = React.createRef();
        // this.playAudio = this.playAudio.bind(this);
        // this.updateTime = this.updateTime.bind(this);
        this.togglePlay = this.togglePlay.bind(this);

    }

    // componentDidUpdate

    // playAudio() {

    // }
    // updateTime(timestamp) {
    //     timestamp = Math.floor(timestamp);
    //     this.setState({ currentTime: timestamp });
    // }

    togglePlay() {
        if (this.state.playStatus){
            this.controls.current.pause();
            this.setState({playStatus: false});
        } else {
            this.controls.current.play();
            this.setState({playStatus: true});
        }
    }

    // playAudio() {
    //     let audio = this.controls.current;
    //     let playing = false;
    //     audio.play();
        
    //     this.setState({ playStatus: true })
    // }


    render() {
        // const { currentSong } = this.props;
        // const { audio_url } = currentSong;
        return (
            <div className="nowplayingcontainer">
                <div>
                    <button className="play" onClick={this.togglePlay}>play</button>
                </div>
                    <audio ref={this.controls} className="nowplaying" src={window.audiourl} />
            </div>
        )
    }

}


export default NowPlaying;