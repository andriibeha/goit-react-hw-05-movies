import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movie }) => {
    return (
        <ul className={s.list}>
            {movie && (movie.map(item => (
                <Link to={`/movie/${item.id}`} key={item.id}>
                    <div className={s.item}>{item.title}</div>
                </Link>
             )
            ))}
        </ul>
    );
};

export default MovieList
