import React, {useState, useEffect} from "react";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";
import AddSong from "./Components/AddSong/AddSong";
import SearchBar from "./Components/SearchBar/SearchBar";
import axios from "axios";
import "./App.css"


function App() {

  const [songs, setSongs] = useState([]);
  const [displaySongs, setDisplaySongs] = useState([])

  useEffect(()=>{
    getAllSongs();
  }, [])
  

  
  async function getAllSongs(){
    let response = await axios.get('http://localhost:8000/api/music/');
    setSongs(response.data)
    setDisplaySongs(response.data)
    console.log(response.data)
  }

  async function createSong(prop){
    let response = await axios.post('http://localhost:8000/api/music/', prop);
    console.log(response.data)
  }

  async function updateSong(songData, songId){
    let response = await axios.put(`http://localhost:8000/api/music/${songId}`, songData);
    console.log(response.data)
    await getAllSongs()
  }

  async function deleteSong(songId){
    await axios.del(`http://localhost:8000/api/music/${songId}`);
    console.log('deleted')
    await getAllSongs()
  }

  const filterSongs = (searchSong) => {

    let matchingSongs = songs.filter((song)=>{
      if(song.title.toLowerCase().includes(searchSong.toLowerCase()) ||

      song.artist.toLowerCase().includes(searchSong.toLowerCase()) ||

      song.album.toLowerCase().includes(searchSong.toLowerCase()) ||

      song.release_date.includes(searchSong) ||

      song.genre.toLowerCase().includes(searchSong.toLowerCase())
      
      ){
        return true
      }
      else{
        return false
      }
    })

    setDisplaySongs(matchingSongs)
  };

  return (
    <div>
      <header>
      <h1>MusicLibrary</h1>
      </header>

      <h3></h3>

      <div>

      <AddSong createSong={createSong}/>

      <SearchBar filterSongs={filterSongs}/>

      <DisplaySongs parentEntries = {displaySongs}/>
      

      </div>
    
    </div>
  );
}

export default App;

//<DisplaySongs songs = {displaySongs}/>

//<AddSong addNewSongProperty={addNewSong}/>

//<button onClick={()=> addNewSong()}>Submit</button>