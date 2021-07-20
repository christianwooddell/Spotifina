import React from "react";
import { getSong } from "../../actions/song_actions";
import { fetchSongs } from "../../util/song_api_util";
import { currentSong } from "./now_playing_container";
import { playCurrentSong } from "../../actions/player_actions"
import {GrPlayFill} from "react-icons/gr"

class NowPlaying extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playStatus: true,
            currentSong: 1,
            // muted: false,
            // currentTime = 0,
            // volume = 50

        }
        this.controls = React.createRef();
        // this.playAudio = this.playAudio.bind(this);
        // this.updateTime = this.updateTime.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.nextSong = this.nextSong.bind(this);

    }

    // componentDidUpdate

    componentDidMount() {
        this.props.getSongs()
    }

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

    nextSong() {
        let nextSong = this.state.currentSong + 1
        this.setState({currentSong: nextSong})
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
        debugger
        if (!this.props.songs[this.state.currentSong]) return null;
        return (
            <div id="nowplayingcontainer">
                <div>
                    <button className="play" onClick={this.togglePlay}>
                        <GrPlayFill />
                    </button>
                    <button className="nextsong" onClick={this.nextSong}>
                        next
                    </button>
                </div>
                    <audio ref={this.controls} className="nowplaying" src={this.props.songs[this.state.currentSong].audio_url} />
            </div>
        )
    }
}


export default NowPlaying;