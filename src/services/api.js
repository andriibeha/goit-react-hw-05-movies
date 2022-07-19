const API_KEY = "34895b211a80383b2c394544baf4edcf";
const BASE_URL = "https://api.themoviedb.org/3";

export function fetchTrendFilm() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    return fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
};

export function fetchFilmById(id) {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    return fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
};

export function fetchFilmByQuery(query) {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
    return fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
};


