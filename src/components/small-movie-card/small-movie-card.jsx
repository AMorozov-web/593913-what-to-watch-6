import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = ({film}) => {

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={film.previewImage} alt={film.title} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
      </h3>
    </article>
  );
};


SmallMovieCard.propTypes = {
  film: PropTypes.object.isRequired,
};

export default SmallMovieCard;
