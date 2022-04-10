import React, {useState} from "react";
import lyrics from './lyrics';
import { FaYoutube } from 'react-icons/fa';

const Songs = () => {
    const [index, setIndex] = useState(Math.floor(Math.random()*11));
    const {lyric, artist, link, song, image} = lyrics[index]

    const randomSong = () => {
        let randomNumber = Math.floor(Math.random() * lyrics.length);
        
        setIndex(randomNumber);
    }

    const playSound = () => {
        let audio = new Audio("/another.mp3")
        audio.play();
    }

    return <div className="song-info">
        <button className="another" onClick={randomSong} >Another One</button>

        <img src={image} alt={artist}></img>
        <h2>{artist}</h2>
        <h3>{song}</h3>
        <p>"{lyric}"</p>
        <a href={link} target="_blank"><FaYoutube /></a>        
        
    </div>
};

export default Songs;