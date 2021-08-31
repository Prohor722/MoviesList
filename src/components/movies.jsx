import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService'
import PageNo from './common/pagination';
import { paginate } from './utils/paginate';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable'
import _ from 'lodash'

export class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: { path: 'title', order: 'asc' }
    }
    componentDidMount() {
        const genres = [{ _id: "", name: "All Genres" }, ...getGenres()]
        this.setState({ movies: getMovies(), genres })
    }
    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }
    movieDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies })
    }
    handlePageChange = page => {
        this.setState({ currentPage: page });
    }
    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    }
    handleSort = sortColumn => {
        this.setState({ sortColumn })
    }
    render() {
        const {
            pageSize,
            currentPage,
            movies: allMovies,
            genres,
            selectedGenre,
            sortColumn
        } = this.state;

        const { length: moviesCount } = this.state.movies;

        if (moviesCount === 0) return <p>There is no movies in the database</p>;

        const filteredMovies = selectedGenre && selectedGenre._id ?
            allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;

        const sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sortedMovies, currentPage, pageSize);

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={genres}
                        selectedItem={selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {filteredMovies.length} movies from your database.</p>

                    <MoviesTable
                        onDelete={this.movieDelete}
                        onLike={this.handleLike}
                        movies={movies}
                        sortColumn={sortColumn}
                        onSort={this.handleSort}
                    />
                    <PageNo
                        itemsCount={filteredMovies.length}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        )
    }
}

export default Movies
