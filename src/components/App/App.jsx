import { Route, Routes } from "react-router-dom";
import Header from "components/Header/Header";
import Home from "components/pages/Home/Home";
import Movie from "components/pages/Movie/Movie";
import NotFound from "components/pages/NotFound/NotFound";
import TrendItem from "components/TrendItem/TrendItem";


function App() {
    return (
        <>
            <Routes >
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="movie" element={<Movie />} />
                    <Route path="/movie/:id/*" element={<TrendItem />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;