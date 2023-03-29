import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AnimeInfo = () => {

    const [animeInfo, setAnimeInfo] = useState({});
    const [animeImage, setAnimeImage] = useState({});

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

    useEffect (() => {
        axios ({
            url: `https://api.jikan.moe/v4/anime/${urlParams.animeDetails}/pictures`
        })
        .then ((apiData) => {
            setAnimeImage(apiData.data.data[0].jpg.image_url);
        })
    },[])

    return (
        <div className="animeInfo">
            <h2>{title}</h2>
            <div className="animeCard">
                <div className="animeCardImage">
                    <img src={animeImage} alt={title} />
                </div>
                <div className="animeCardDetails">
                    <ul className="animeCardFacts">
                        <li>Score: {score}</li>
                        <li>Popularity Rank: {popularity}</li>
                        <li>Status: {status}</li>
                        <li>Episodes: {episodes}</li>
                        <li>Premiered: {season} {year}</li>
                    </ul>
                    <div className="animeCardDescription">
                        <p>{synopsis}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeInfo;