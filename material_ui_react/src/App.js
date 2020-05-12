import React, { useReducer, useEffect } from 'react';
import Header from "./components/Header"
import Movies from "./components/Movies"
import './App.css';
import { Grid } from '@material-ui/core';


const API_KEY = "65525897";

const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&apikey=9e6d6d2f`;

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {

        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search
        });
      });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}&page=1`)
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse);

        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;

  return (
    <div className="App">
      <Header search={search} />
      <p className="App-intro">Sharing a few of our favorite movies</p>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12}  >
          <div className="movies">
            {loading && !errorMessage ? (
              <span className="loader"></span>
            ) : errorMessage ? (
              <div className="errorMessage">{errorMessage}</div>
            ) : (
                  movies.map((movie, index) => (
                    <Movies key={`${index}-${movie.Title}`} movie={movie} />
                  ))
                )}
          </div>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </div >
  );
};

export default App;