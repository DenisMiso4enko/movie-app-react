import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
import Movie from './components/Movie';

export default class App extends Component {

  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {data: {data: { movies }}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    console.log(movies);
    this.setState({ movies, isLoading: false  })

  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    const {isLoading, movies} = this.state
    return (
      <div className="container">
        <h1 className="fs-1 mb-5">Movie app</h1>
        {isLoading ? 'идет загрузка...' : movies.map(film => {
          console.log(film);
          return(<Movie  key={film.id} data={film} />)}
          )}
      </div>
    )
  }
}
