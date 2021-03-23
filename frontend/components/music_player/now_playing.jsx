import React from "react";
import { fetchSongs } from "../../util/song_api_util";


class NowPlaying extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     playStatus: "play",
        // }
        // this.playAudio = this.playAudio.bind(this);

    }

    // componentDidUpdate

    // playAudio() {

    // }


    render() {
        // const { currentSong } = this.props;
        // const {audio_url} = currentSong;
        return (
            <div className="nowplayingcontainer">
                <audio controls className="nowplaying">
                    <source src="https://www.computerhope.com/jargon/m/example.mp3" type="audio/mpeg" />
                </audio>
            </div>
        )
    }

}

export default NowPlaying;