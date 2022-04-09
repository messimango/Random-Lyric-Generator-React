import React, {useState} from "react";
import lyrics from './lyrics';
import { FaYoutube } from 'react-icons/fa';

const Songs = () => {
    const [index, setIndex] = useState(Math.floor(Math.random()*11));
    const {lyric, artist, link, song, image} = lyrics[index]
    return <div className="song-info">
        <img src={image} alt={artist}></img>
        <h2>{artist}</h2>
        <h3>{song}</h3>
        <p>"{lyric}"</p>
        <a href={link} target="_blank"><FaYoutube /></a>
    </div>
};

export default Songs;