import React, {useState} from "react";



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

      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Release Date</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {entries.map((entry) => {
              return(
                <tr>
                  <td>{entry.title}</td>
                  <td>{entry.artist}</td>
                  <td>{entry.album}</td>
                  <td>{entry.release_date}</td>
                  <td>{entry.genre}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    
    </div>
  );
}

export default App;
