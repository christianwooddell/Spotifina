import { connect } from "react-redux";
import NowPlaying from "./now_playing";
import { getSong } from "../../actions/song_actions";

const mapStateToProps = state => ({
    songs: state.songs
});

const mapDispatchToProps = dispatch => ({
    getSong: songId => dispatch(getSong(songId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);