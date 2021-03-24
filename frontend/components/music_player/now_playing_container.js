import { connect } from "react-redux";
import NowPlaying from "./now_playing";
import { getSong } from "../../actions/song_actions";

const mapStateToProps = state => {
    let currentSong = state.nowPlaying.currentSong;
    return {
        currentSong,
        playStatus: state.nowPlaying.playStatus,
    }
};

const mapDispatchToProps = dispatch => ({
    getSong: songId => dispatch(getSong(songId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
