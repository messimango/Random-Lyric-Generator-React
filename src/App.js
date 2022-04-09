import './App.css';
import React, {Component} from 'react';
import Songs from './Songs';
import {Howl, Howler} from 'howler';

class App extends Component() {
  playClip() {
    console.log('sound')
    const Sounds = new Howl({
      src: ['/another.mp3']
    })
    Sounds.play()
    console.log('sound')
  }
  render() {
    Howler.volume(1.0)
  return (
    <div className="App">      
        <h1>Random Lyric Generator</h1>
        <div className="underline"></div>

        <div className="rqg-box">
          <Songs />
          <button className="another" onClick={this.playClip} >Another One</button>
        </div>

        <div className='footer'>

        </div>
    </div>
  );
  }
}

export default App;
