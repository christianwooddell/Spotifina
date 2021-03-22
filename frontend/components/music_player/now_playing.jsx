import React from "react";


class NowPlaying extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="nowplayingcontainer">
                <audio controls className="nowplaying">
                    <source src="Beez.mp3" type="audio/mpeg" />
                </audio>
            </div>
        )
    }

}

export default NowPlaying;