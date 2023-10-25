import { NavLink, Route, Routes } from 'react-router-dom';
import { StyledContainer } from 'Styles/Container.styled';
import { Suspense, lazy } from 'react';
import { Blocks } from 'react-loader-spinner';
const Home = lazy(() => import('pages/Home'));
const MovieInfo = lazy(() => import('pages/MovieInfo'));
const Search = lazy(() => import('pages/Search'));

export const App = () => {
  return (
    <StyledContainer>
      <header className="header">
        <nav>
          <NavLink to={'/'} className="header-link">
            Home
          </NavLink>
          <NavLink to={'/movies'} className="header-link">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense
        fallback={
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
          />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Search />} />
          <Route path="/movies/:movieId/*" element={<MovieInfo />} />
        </Routes>
      </Suspense>
    </StyledContainer>
  );
};
