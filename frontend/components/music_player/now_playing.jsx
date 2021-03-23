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
        // const { currentSong } = this.props;
        // const {audio_url} = currentSong;
        return (
            <div className="nowplayingcontainer">
                <audio controls id="nowplayingplayer" ref={this.controls} src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"/>
            </div>
        )
    }

}

export default NowPlaying;