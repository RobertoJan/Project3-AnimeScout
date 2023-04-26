import AnimeList from "./AnimeList";
import Form from "./Form";
import axios from "axios";
import { useState, useEffect} from "react";

// this is the Home page and the main component holding states and making the API calls 
const AnimeScout = () => {

// initializing state for user input and populating an array of object from the axios call to the api
    const [input, setInput] = useState('');
    const [animeList, setAnimeList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

// event handlers so that React can take the information from the form input and the user submit the input
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        userSearch();
        setInput('');
    }

// side effect on initial render of the page, we are making an axios call to the JIKAN API and retrieving the top anime in the favorite category
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
        })
    },[])

// a function used to make an axios call using the user input as a parameter to retrieve an array of anime titles according to the input
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
            setErrorMessage('')
            setAnimeList(apiData.data.data)
        })
        .catch(function (error) {
            setErrorMessage(error.toJSON().message);
        });
    }

    return (
        <div className="home">
            <header className="wrapper">
                <h1>AnimeScout</h1>
                <h3>Scout an Anime to Watch!</h3>
                <h5>Below are the favorite Anime of our site but you can always insert a keyword to explore new titles! </h5>
                <h5>Give it a Try!</h5>
            </header>
            <Form input={input} handleSubmit={handleSubmit} handleChange={handleChange} />
            {errorMessage.length < 1 ? 
            animeList.length < 1 ?
                <div className="noResults">
                    <h3>No results found with that word please try with a different one</h3>
                </div> :
                <ul className="animeList wrapper">
                    {animeList.map((anime) => {
                        return (
                            <AnimeList key={anime.mal_id} image={anime.images.jpg.large_image_url} title={anime.title} id={anime.mal_id} />
                        )
                    })
                    }
                </ul>
             : <div className="wrapper axiosErrorContainer">
                <h3 className="axiosErrorMessage">{errorMessage}</h3>
             </div>
            }
        </div>
    )
}

export default AnimeScout;