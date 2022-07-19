import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react';
import { fetchFilmById } from 'services/api';
import { Link } from 'react-router-dom'
import s from "./TrendItem.module.css"

const TrendItem = () => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

    const IMG_URL = "https://image.tmdb.org/t/p/w300";

    useEffect(() => {
        fetchFilmById(id)
            .then(data => {
                setFilm(data)
            });
    }, [id]);

    

    return (
        <>
        
        <li className={s.item}>
            {film && (
                <div className={s.wraper}>
                <img className={s.img} src={`${IMG_URL}${film.poster_path}`} alt="Film img" height={450}/>
                <h2 className={s.title}>{film.original_title} ({film.release_date.slice(0, 4)})</h2>
                <h3 className={s.title}>Overview</h3>
                <p className={s.text}>{film.overview}</p>
                <h4 className={s.title}>Genres</h4>
                <div>{film.genres.map(genres => (<div key={genres.name} className={s.genres}>{genres.name}</div>)) }</div>
                </div>
            )}
        </li>

            <p className={s.text}>Additional information</p>
            <ul className={s.list}>
                <Link className={s.link} to="/movie/:id/credits" >Cast</Link>
                <Link className={s.link} to="/movie/:id/reviews">Reviews</Link>
            </ul>
        </>
    )
};

export default TrendItem;