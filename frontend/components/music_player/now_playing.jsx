import React from "react";


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
        const { currentSong } = this.props;
        const {audio_url} = currentSong;
        return (
            <div className="nowplayingcontainer">
                <audio controls id="nowplayingplayer" ref={this.controls} src={audio_url}/>
            </div>
        )
    }

}

export default NowPlaying;