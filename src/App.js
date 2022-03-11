import React, {useState} from "react";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";
import AddSong from "./Components/AddSong/AddSong";



function App() {

  const [entries, setEntries] = useState([{title: "Jack Sparrow", artist: "Lonely island", album: "Turleneck & Chain", release_date: "2017-01-01", genre: "comedy"}])

  function addNewSong(entry){
    
    let tempEntries = [...entries, entry];

    setEntries(tempEntries)

  }

  return (
    <div>

      <h1>MUSIC LIBRARY WEBSITE HEADER GOES HERE</h1>

      <h3>NAV BAR GOES HERE</h3>

      <DisplaySongs parentEntries = {entries}/>
      <AddSong/>
    
    </div>
  );
}

export default App;
