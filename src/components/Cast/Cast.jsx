import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'services/api';
import s from "./Cast.module.css"

const Cast = () => {
    const { id } = useParams();
    const [actors, setActors] = useState([]);

    const IMG_URL = "https://image.tmdb.org/t/p/w300";

    useEffect(() => {
        fetchCredits(id)
            .then(data => {
                setActors(data.cast)
            });
    }, [id]);
    
    
    return (
        <>
            {actors && (
                actors.map(actor => (
                    <li className={s.item} key={actor.id}>  
                        <img src={`${IMG_URL}${actor.profile_path}`} alt="actor" className={s.img} />
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </li>
                ))
            )}
        </>
    )
};

export default Cast;