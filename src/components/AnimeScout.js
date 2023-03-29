import AnimeList from "./AnimeList";
import Form from "./Form";
import axios from "axios";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";


const AnimeScout = () => {

    const [input, setInput] = useState(null);
    const [animeList, setAnimeList] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        userSearch();
        
    }

    useEffect (() => {
        axios ({
            url: `https://api.jikan.moe/v4/top/anime`,
            params: {
                type:'tv',
                filter: 'favorite',
                limit: 20
            }
        })
        .then ((apiData)=> {
            setAnimeList(apiData.data.data);
            console.log(apiData.data.data)

        })
    },[])

    const userSearch = () => {
        axios ({
            url: `https://api.jikan.moe/v4/anime`,
            params: {
                q: input,
                type: 'tv',
                limit: 20
            }
        })
        .then ((apiData) => {
            setAnimeList(apiData.data.data)
        })
    }

    return (
        <div className="scoutPage">
            <Form handleSubmit={handleSubmit} handleChange={handleChange} />

            <ul className="animeList">
                {
                    animeList.map((anime) => {
                        return (

                            <AnimeList key={anime.mal_id} image={anime.images.jpg.image_url} title={anime.title} id={anime.mal_id} />
                        
                        )
                    })
                }

            </ul>
            
        </div>
    )
}

export default AnimeScout;