import { connect } from "react-redux";
import NowPlaying from "./now_playing";
import { getSong } from "../../actions/song_actions";

// const mapStateToProps = state => {
//     let currentSong = state.nowPlaying.currentSong;
//     return {
//         currentSong,
//         playStatus: state.nowPlaying.playStatus,
//     }
// };

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUser],
    songs: state.entities.songs
    // currentSong: state.session.currentSong
});

const mapDispatchToProps = dispatch => ({
    getSong: songId => dispatch(getSong(songId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
