import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Link } from 'react-router-dom';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Form,Button} from 'react-bootstrap';

import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hero = ({ movies }) => {
  return (
    <div>
      <Carousel>
        {movies.map((movie) => {
          return (
            <Paper key={movie.imdbId}>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={{ "--img": `url(${movie.backdrops[0]})` }}
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt="" />
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>
                    <div className="movie-buttons-container">
                      <Link
                        to={`/Trailer/${movie.trailerLink.substring(
                          movie.trailerLink.length - 11
                        )}`}
                      >
                        <div className="play-button-icon-container">
                          <FontAwesomeIcon
                            className="play-button-icon"
                            icon={faCirclePlay}
                          />
                        </div>
                      </Link>
                      <Link
                        to={`/Reviews/${movie.imdbId}`}
                      >    
                      <div className="movie-review-button-container">
                        <Button
                          variant="info"
                          
                        >
                          Reviews
                        </Button>
                      </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
