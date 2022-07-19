import React from "react";
import { Route, Routes} from "react-router-dom"

import Header from "components/Header/Header";
import Home from "components/pages/Home/Home";
import Movie from "components/pages/Movie/Movie";
import NotFound from "components/pages/NotFound/NotFound";
import TrendItem from "components/TrendItem/TrendItem";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";


function App() { 

    return (
        <>
        <Routes >
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />  
                <Route path="/movie/:id" element={<TrendItem />} />
                    <Route path="/movie/:id/credits" element={<Cast />} />
                    <Route path="/movie/:id/reviews" element={<Reviews />} />
                <Route path="movie" element={<Movie />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
        </>
    );
};

export default App;