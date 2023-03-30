import { Link } from "react-router-dom";

const AnimeList = (props) => {
   
    // this component is being mapped on AnimeScout to create a list of anime titles and information is passed down via props

    const {image, title, id} = props;
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