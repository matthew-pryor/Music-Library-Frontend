import React, {useState, useEffect} from "react";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";
import AddSong from "./Components/AddSong/AddSong";
import axios from "axios";


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(()=>{
    getAllSongs();
  }, [])
  
  async function createSong(prop){
    let response = await axios.post('http://localhost:8000/api/music/', prop);
    console.log(response.data)
  }
  
  async function getAllSongs(prop){
    let response = await axios.get('http://localhost:8000/api/music/');
    setSongs(response.data)
    console.log(response.data)
  }

  return (
    <div>

      <h1>MUSIC LIBRARY WEBSITE HEADER GOES HERE</h1>

      <h3>NAV BAR GOES HERE</h3>

      <div>

      <AddSong createSong={createSong}/>

      </div>
    
    </div>
  );
}

export default App;

//<DisplaySongs parentEntries = {entries}/>

//<AddSong addNewSongProperty={addNewSong}/>

//<button onClick={()=> addNewSong()}>Submit</button>