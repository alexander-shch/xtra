import React from 'react';

export interface PaginationProps {
  totalPages: number,
  currentPage: number,
}

export const Pagination: React.FC<PaginationProps> = ({totalPages, currentPage}) => {
  return totalPages >=2 ?
    <nav className='pagination is-centered' role='navigation' aria-label='pagination'>
      <ul className='pagination-list'>
          <li><a className='pagination-link' aria-label='Goto page 1'>1</a></li>
          <li><span className='pagination-ellipsis'>&hellip;</span></li>
          <li><a className='pagination-link' aria-label={`Go to page ${totalPages}`}>{totalPages}</a></li>
      </ul>
    </nav> : null
}
