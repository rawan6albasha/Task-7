"use client"
import React, { useState } from 'react';
import style from './Pagination.module.css'
import PaginationUl from './PaginationUl';



const Pagination = ({cardNumber,cardProps,CardComponent,title,cardData}) => {
 

  const [itemsPerPage] = useState(cardNumber);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts =cardData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={`container`}>
    <div className={style.head}>
    <h2 className={`font-800-32`}>{title} </h2>
          <PaginationUl
        itemsPerPage={itemsPerPage}
        totalItems={cardData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
      <div className={style.cardContainer}>
        {currentProducts.map((product) => (
          <CardComponent key={product.id} cardData={product} {...cardProps}  />
        ))}
      </div>


    </div>
  );
};

export default Pagination;
