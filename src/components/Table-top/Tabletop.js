import React from 'react';
import './Tabletop.style.scss';

const TableTop = ({ tableProps, width }) => {
  const tableTitles = tableProps.map((item) => {
    return (
      <div key={item} className='tableTopTitle'>
        <span>{item}</span>
      </div>
    );
  });

  return width !== undefined && width <= 800 ? null : (
    <div className='tableTop'>{tableTitles}</div>
  );
};

export default TableTop;
