import React, { useRef } from 'react'
import './App.css';
//import MainPage from "./views/MainPage/MainPage.js";
import { Route, Redirect, Switch } from "react-router-dom";
import MainPage from './views/MainPage.js';
import QuizPage from './views/QuizPage/QuizPage';
import bgmStart from '../resources/picture/bgmStart.png';
import bgmPause from '../resources/picture/bgmPause.png';
import music from "../resources/music/HappyMistake.mp3"


function App() {

  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <div className="App">
      <div class="bgmOnOff">
        <audio src={music} ref={audioRef} loop>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <img src={bgmStart} class="bgmStart" alt="" onClick={handlePlay}/>
        <img src={bgmPause} class="bgmPause" alt="" onClick={handlePause}/>
      </div>
      <Switch>
        <Route exact path="/" component={MainPage} render={<Redirect to="/ox_quiz" />} />
        <Route exact path="/ox_quiz" component={MainPage} />
        <Route exact path="/quiz" component={QuizPage} />
      </Switch>
    </div>
  );
}

export default App;
