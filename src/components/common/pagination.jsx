import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const pagination = props => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;

    const pagesCount = itemsCount / pageSize;

    if (pagesCount <= 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <button href="#" className="page-link">Previous </button>
                </li>
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                        <button className="page-link"
                            onClick={() => onPageChange(page)} >
                            {page}
                        </button>
                    </li>
                ))}
                <li className="page-item">
                    <button className="page-link">Next</button>
                </li>
            </ul>
        </nav>
    )
}

pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}
export default pagination;
