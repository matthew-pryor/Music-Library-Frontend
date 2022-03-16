import React, {useState} from "react";
import "./SearchBar.css"


const SearchBar = (props) => {

    const [searchSong, setSearchSong] = useState('');

    function handleSubmit(entry){
        entry.preventDefault()
        props.filterSongs(searchSong)
    }

    return (
        <div class="form">
            <form onSubmit={handleSubmit}>
                <div class="title"> </div>
                <div class="subtitle">Search for songs inside your playlist here!</div>
                <div>
                <input class="input-container" value={searchSong} onChange={(entry)=>setSearchSong(entry.target.value)} type='text' placeholder="Search by title, aritst, etc..."></input>
                </div>
                <div>
                <button type="text" class="submit">Search</button>
                </div>
            </form>
        </div>
      );
}
 
export default SearchBar;