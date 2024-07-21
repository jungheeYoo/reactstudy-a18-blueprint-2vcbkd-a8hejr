import { getPopular } from '../api';
import MovieList from '../Components/Movie-list';

function Home() {
  return <MovieList getMovies={getPopular} />;
}

export default Home;
