import React from 'react';
import './App.css';
import { Search, Header } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="search-container">
          <Header as='h1'>Search a Playlist</Header>
          <Search fluid className="search" />
        </div>
      </div>
    </div>
  );
}

export default App;
