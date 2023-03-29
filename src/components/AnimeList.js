import { Link } from "react-router-dom";

const AnimeList = (props) => {

    const {image, title, id} = props;
    console.log(id);
    return (
        <li className="animeLI">
            <Link to={`/animeInfo/${id}`} >
                <div className="animeImage">
                    <img src={image} alt={title} />
                    <h5 className="animeTitle">{title}</h5>
                </div>
            </Link>
        </li>
    )
}

export default AnimeList;