import { NavLink, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Search } from 'pages/Search';
import { MovieInfo } from 'pages/MovieInfo';

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/movies'}>Movies</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Search />} />
        <Route path="/movies/:movieId/*" element={<MovieInfo />} />
      </Routes>
    </>
  );
};
