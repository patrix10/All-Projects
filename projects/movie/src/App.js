import './App.css';
import Header from './Components/Header';
import Movie from './Components/Movie';
import movies from './movie.json'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        {
          movies.map((e) => {
            return (
            <Movie 
            title={e.movie}
            rating={e.rating}
            img={e.image}
            />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
