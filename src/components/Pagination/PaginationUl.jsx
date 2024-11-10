import React from 'react';
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
import style from './Pagination.module.css';

const PaginationUl = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav>
      <ul className={style.paginationUl}>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button onClick={prevPage} className="page-link" aria-disabled={currentPage === 1}>
          <IoIosArrowBack />

          </button>
        </li>
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button onClick={nextPage} className="page-link" aria-disabled={currentPage === totalPages}>
          <IoIosArrowForward />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationUl;
