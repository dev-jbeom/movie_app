import React from "react"
import PropsTypes from "prop-types"
import LineEllipsis from "react-lines-ellipsis"
import "./Movie.css"
function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie_Column">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie_Column">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <div className="Movie_Synopsis">
          <LineEllipsis text={synopsis} maxLine="6" ellipsis="..." trimRight basedOn="letters" />
        </div>
      </div>
    </div>
  )
}

function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
}

function MovieGenre({ genre }) {
  return <span className="Movie_Genre">{genre}</span>
}

Movie.propsTypes = {
  title: PropsTypes.string.isRequired,
  poster: PropsTypes.string.isRequired,
  genres: PropsTypes.array.isRequired,
  synopsis: PropsTypes.string.isRequired
}

MoviePoster.propsTypes = {
  poster: PropsTypes.string.isRequired,
  alt: PropsTypes.string.isRequired
}

MovieGenre.propsTypes = {
  genre: PropsTypes.string.isRequired
}
// class Movie extends Component {
//   static propsTypes = {
//     title: PropsTypes.string.isRequired,
//     poster: PropsTypes.string
//   }
//   render() {
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1>{this.props.title}</h1>
//       </div>
//     )
//   }
// }

// class MoviePoster extends Component {
//   static propsTypes = {
//     poster: PropsTypes.string.isRequired
//   }
//   render() {
//     return <img src={this.props.poster} />
//   }
// }

export default Movie
