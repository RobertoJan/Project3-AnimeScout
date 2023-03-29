import { Link } from "react-router-dom";

const AnimeList = (props) => {

    const {image, title, id} = props;
    return (
        <li>
            <Link to={`/animeInfo/${id}`} >
                <div className="animeImage">
                    <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
            </Link>
        </li>
    )
}

export default AnimeList;