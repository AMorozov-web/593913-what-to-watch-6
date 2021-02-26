import React, {useState} from 'react';
import {filmPropReview, TabTypes} from '../../consts';
import {FilmOverviewTab} from '../film-overview-tab/film-overview-tab';
import {FilmDetailsTab} from '../film-details-tab/film-details-tab';
import {FilmReviewsTab} from '../film-reviews-tab/film-reviews-tab';

const getTabByType = (film, type = TabTypes.OVERVIEW) => {
  switch (type) {
    case TabTypes.OVERVIEW:
      return <FilmOverviewTab film={film} />;
    case TabTypes.DETAILS:
      return <FilmDetailsTab film={film} />;
    case TabTypes.REVIEWS:
      return <FilmReviewsTab film={film} />;
    default:
      return ``;
  }
};

const Tabs = ({film}) => {
  const [selectedTab, setSelectedTab] = useState(TabTypes.OVERVIEW);

  const onClick = (evt) => {
    evt.preventDefault();
    setSelectedTab(evt.target.textContent.toUpperCase());
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${selectedTab === TabTypes.OVERVIEW ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={onClick}>Overview</a>
          </li>
          <li className={`movie-nav__item ${selectedTab === TabTypes.DETAILS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={onClick}>Details</a>
          </li>
          <li className={`movie-nav__item ${selectedTab === TabTypes.REVIEWS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={onClick}>Reviews</a>
          </li>
        </ul>
      </nav>
      {getTabByType(film, selectedTab)}
    </div>
  );
};

Tabs.propTypes = {
  film: filmPropReview,
};

export {Tabs};
