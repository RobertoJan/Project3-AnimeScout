import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AnimeInfo = () => {

    const [animeInfo, setAnimeInfo] = useState({});

    const urlParams = useParams();

    const {popularity, status, title, year, synopsis, episodes, score, season } = animeInfo;

    useEffect (() => {
        axios ({
            url: `https://api.jikan.moe/v4/anime/${urlParams.animeDetails}`
        })
        .then ((apiData) => {
            setAnimeInfo(apiData.data.data);
        })
    },[])

    return (
        <div className="wrapper">
            <h2>{title}</h2>
            <div className="animeCard">
                <div className="animeImage">
                    <img src={animeInfo.images.jpg.image_url} alt={title} />
                </div>
                <div className="animeDetails">
                    <ul>
                        <li>Score: {score}</li>
                        <li>Popularity Rank: {popularity}</li>
                        <li>Status: {status}</li>
                        <li>Episodes: {episodes}</li>
                        <li>Premiered: {season} {year}</li>
                    </ul>
                    <div className="animeDescription">
                        <p>{synopsis}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeInfo;