import './App.css';
import React, {Component} from 'react';
import Songs from './Songs';

class App extends Component {
  render() {
  return (
    <div className="App">      
        <h1>Random Lyric Generator</h1>
        <div className="underline"></div>
        <div className="rqg-box">
          <Songs />
        </div>

        <div className='footer'>

        </div>
    </div>
  );
  }
}

export default App;
