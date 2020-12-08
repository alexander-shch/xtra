import React from 'react';

const CheckBoxes = ({ categories, handleCheck }) => {
  return (
    <>
      {categories.map((category) => (
        <div key={category._id}>
          <input value={category._id} type='checkbox' onChange={handleCheck} />
          <label>{category.title}</label>
        </div>
      ))}
    </>
  );
};

export default CheckBoxes;
