import React, {useState} from "react";
import "./AddSong.css"

const AddSong = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function addSong(event){
        event.preventDefault();
        let song = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        };
        props.createSong(song)
        console.log(song)
    }

    

    return ( 

        <div class="form">
        <form onSubmit={addSong}>

            <div class="title">Welcome to your MusicLibrary!</div>

            <div class="subtitle">Store songs in your personal playlist with the fields below!</div>

            <div >

            <input class="input-container" type='text' placeholder="Enter Song Title" value={title} onChange={(event) => setTitle(event.target.value)}/>

            </div>

            <div>

            <input class="input-container" type='text' placeholder="Enter Song Artist" value={artist} onChange={(event) => setArtist(event.target.value)}/>

            </div>

            <div>

            <input class="input-container" type='text' placeholder="Enter Song Album" value={album} onChange={(event) => setAlbum(event.target.value)}/>

            </div>

            <div>

            <input class="input-container" type='date' value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>

            </div>

            <div>
            
            <input class="input-container" type='text' placeholder="Enter Song Genre" value={genre} onChange={(event) => setGenre(event.target.value)}/>

            </div>

            <div>
            <button type="text" class="submit">Add Song</button>
            </div>
        </form>
        </div>
     );
}
 
export default AddSong;

