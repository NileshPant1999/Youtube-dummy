import React from 'react';
import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import RecommendedVideos from "./RecommendedVideos"

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__page'>
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>

  );
}

export default App;
