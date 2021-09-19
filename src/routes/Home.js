import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "../reset.css";
import "./Home.css";

class Home extends React.Component {
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
      <section className="container">
        {isLoading ? (
          <div className="loader_wrap">
            <div className="loader">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                bgImg={movie.background_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
