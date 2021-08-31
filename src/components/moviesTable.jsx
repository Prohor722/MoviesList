import React, { Component } from 'react'
import Like from './common/like';

class moviesTable extends Component {

    raiseSort = path => {
        const sortColmn = { ...this.props.sortColmn };

        if (sortColmn.path === path) {
            sortColmn.order = (sortColmn.order === "asc") ? console.log("desc") : console.log("asc");
        }
        else {
            sortColmn.path = path;
            sortColmn.order = "asc";
        }
        this.props.onSort(sortColmn);
    }
    render() {
        const { movies, onDelete, onLike } = this.props;

        return (
            <table className="table">
                <tbody>
                    <tr>
                        <th onClick={() => this.raiseSort('title')}>Title</th>
                        <th onClick={() => this.raiseSort('genre.name')}>Genre</th>
                        <th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
                        <th onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
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
                                <Like liked={movie.liked} onClick={() => onLike(movie)} />
                            </td>
                            <td>
                                <button onClick={() => onDelete(movie)} className="btn btn-danger sm">Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        )
    }
}
export default moviesTable
