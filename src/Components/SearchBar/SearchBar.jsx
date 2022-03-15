import React, {useState} from "react";
import axios from "axios";


const SearchBar = (props) => {

    const [searchSong, setSearchSong] = useState('');

    function handleSubmit(entry){
        entry.preventDefault()
        props.filterSongs(searchSong)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchSong} onChange={(entry)=>setSearchSong(entry.target.value)} type='text' placeholder="Search by title, aritst, etc..."></input>
                <button type="submit">Search</button>
            </form>
        </div>
      );
}
 
export default SearchBar;