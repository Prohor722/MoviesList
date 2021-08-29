import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'
import Like from './common/like'
import PageNo from './common/pagination'
import { paginate } from './utils/paginate'

export class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
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
    render() {
        const { pageSize, currentPage, movies: allMovies } = this.state;
        const { length: moviesCount } = this.state.movies;
        if (moviesCount === 0) return <p>There is no movies in the database</p>;

        const movies = paginate(allMovies, currentPage, pageSize);

        return (
            <>
                <p>Showing {moviesCount} movies from your database.</p>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tbody>
                    <tbody>
                        {movies.map(movie =>
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like liked={movie.liked} onClick={() => this.handleLike(movie)} />
                                </td>
                                <td>
                                    <button onClick={() => this.movieDelete(movie)} className="btn btn-danger sm">Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <PageNo
                    itemsCount={moviesCount}
                    pageSize={pageSize}
                    onPageChange={this.handlePageChange}
                    currentPage={currentPage}
                />
            </>
        )
    }
}

export default Movies
