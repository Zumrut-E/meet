import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick}) => {
  return (
    <div onClick={()=> onMovieClick(movie)}>
      <div>
        {movie.title}
      </div>
      </div>
  );
};
MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        genre: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        }),
        director: PropTypes.shape({
            name: PropTypes.string.isRequired,
            bio: PropTypes.string.isRequired,
            birth_year: PropTypes.number
        })
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
}