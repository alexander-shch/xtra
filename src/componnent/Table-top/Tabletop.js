import React from 'react';
import './Tabletop.style.scss';

const TableTop = ({ tableProps }) => {
  const tableTitles = tableProps.map((item) => {
    return (
      <div key={item} className={item === 'תאריך' ? 'date' : 'tableTopTitle'}>
        <span>{item}</span>
      </div>
    );
  });

  return <div className='tableTop'>{tableTitles}</div>;
};

export default TableTop;
