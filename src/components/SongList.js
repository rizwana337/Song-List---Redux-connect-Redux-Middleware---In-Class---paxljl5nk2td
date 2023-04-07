import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions"; // import the selectSong action creator

function SongList(props) {
    const { songs, selectSong } = props;

    const onSongSelect = (song) => {
        selectSong(song);
    };

    return (
        <div>
            {songs.map((song) => (
                <div className="song" key={song.title}>
                    <div>{song.title}</div>
                    <div>{song.duration}</div>
                    <button onClick={() => onSongSelect(song)}>Select</button>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList); // connect the SongList component to the redux store and pass the selectSong action creator as a prop

// import React from "react";
// import { connect } from "react-redux";
// function SongList(props) {
//     const { songs } = props;
//     return (
//         <div>
//             {songs.map((song) => (
//                 <div className="song">{song.title}</div>
//             ))}
//         </div>
//     );
// }

// const mapStateToProps = (state) => {
//     return { songs: state.songs };
// };

// // Add code here
