import React from 'react';
import TableTop from '../../../../components/Table-top/Tabletop';

const InterestedList = () => {
  return (
    <TableTop
      tableProps={[
        'תז',
        'תאריך פניה',
        'שם מתעניין',
        'טלפון',
        'דוא"ל',
        'הערות',
        'אפשרויות',
      ]}
    />
  );
};
export default InterestedList;
