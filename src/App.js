import React, { useState } from 'react';
import { useGoogleDrive } from './hooks';
import { VideoPlayer } from './components';
import ReactPlayer from 'react-player';

import './App.css';

function App() {
  const { handleOpenPicker, data } = useGoogleDrive();
  const [access, setAccess] = useState('file');
  
  return (
    <div className="App">
      <div className="access-buttons">
        <button onClick={() => setAccess('file')}>File</button>
        <button onClick={() => setAccess('drive')}>Drive</button>
      </div>
      <div className="player">
        {access === 'file' ? (
          <VideoPlayer />
        ) : (
          <>
            <button onClick={() => handleOpenPicker()}>Open Picker</button>
            <ReactPlayer url={data?.docs?.embedUrl || "https://www.youtube.com/watch?v=zTitoHKsyJg"} controls/>
          </>
        )}
      </div>   
    </div>
  );
}

export default App;
