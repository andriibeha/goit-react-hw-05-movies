import { useState, useEffect } from 'react';
import { fetchTrendFilm } from 'services/api';
import s from "./TrendList.module.css"

import { Link } from 'react-router-dom'

const TrendList = () => {
    const [trendFilm, setTrendFilm] = useState([]);

    useEffect(() => {
        fetchTrendFilm()
            .then(data => {
                setTrendFilm([...data.results])
            });
    }, []);
    

    return (
        <ul className={s.list}>
            {trendFilm.map(item => (
                <Link to={`/movie/${item.id}`} key={item.id}>
                    <div className={s.item}>{item.title}</div>
                </Link>
            ) )}
        </ul>
        
    );
};


export default TrendList;