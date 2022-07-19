import s from "./Movie.module.css"
import { useState, useEffect } from "react";
import MovieList from "components/MovieList/MovieList";
import {fetchFilmByQuery}  from "services/api"


const Movie = () => {
    const [value, setValue] = useState('');
    const [query, setQuery] = useState('');
    const [movie, setMovie] = useState([])

    const handleInputChagne = e => {
        let input = e.target.value.toLowerCase();
        setValue(input);
    };

    useEffect(() => {
        if (query.trim() === "") {
            return
        };

        fetchFilmByQuery(query)
            .then(data => {
                setMovie(data.results)
            });
    }, [query]);

    const handleSubmit = e => {
        e.preventDefault();

        if (value.trim() === '') {
            return
        };

        setQuery(value);
        setValue('');
    };

    return (
        <>
            <form className={s.formn} onSubmit={handleSubmit}>
                <input type="text" className={s.input} value={value} onChange={handleInputChagne} />
                <button type="submit" className={s.button} >Search</button>
            </form>

            {movie.length > 0 && <MovieList movie={movie} />}
        </>
    );
};

export default Movie;