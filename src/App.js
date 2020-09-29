import React from 'react';
import './App.css';
import GetHighlights from './components/getHighlights'
import MainPage from './components/mainPage'
import "normalize.css/normalize.css";
function App() {
  return(
    <div className = "App">
      {/* <GetHighlights/> */}
      {<MainPage/>}
    </div>
  )
}

export default App;
