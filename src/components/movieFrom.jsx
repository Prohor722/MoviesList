import React from 'react'

const movieFrom = ({ match, history }) => {
    return (
        <>
            <h1>Movie From {match.params.id}</h1>

            <button className="btn btn-primary"
                onClick={() => history.push('/movies')}
            >
                Save
            </button>
        </>
    )
}

export default movieFrom
