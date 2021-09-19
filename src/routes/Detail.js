import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <section
          className="detail_bg"
          style={{ backgroundImage: `url(${location.state.bgImg})` }}
        >
          <article>
            <h1>{location.state.title}</h1>
            <h2>{location.state.year}</h2>
            <ul className="genres_box">
              {location.state.genres.map((genres, index) => (
                <li key={index}>{genres}</li>
              ))}
            </ul>
            <p>{location.state.summary}</p>
          </article>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
