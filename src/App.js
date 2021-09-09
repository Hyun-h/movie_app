import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  //async, await는 axios를 쓸 때 같이 다님
  getMovies = async () => {
    //원래 const movies
    const {
      //movies.data.data.movies -> es6 덕분에 밑에처럼 쓸 수 있음
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {this.state.isLoading
          ? "Loading...."
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.poster}
              />
            ))}
      </div>
    );
  }
}

export default App;
