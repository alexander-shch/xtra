import React from 'react';
import VatList from '../../../pages/Vat-list/VatList';

const SelectFromProps = ({ props }) => {
  let props = {
    name: 'yosi',
    className: 'class',
    currentItem: null,
    label: 'בחר',
    data: VatList,
  };

  return (
    <div className='selectFromPropsContainer'>
      <select
        required
        name={props.name}
        className={props.className}
        defaultValue={currentItem !== null ? currentItem : '1'}
        //   onChange={handdleChange}
      >
        <option value='1' disabled hidden>
          {props.label}
        </option>
        {props.data.map((item) => (
          <option key={item._id} value={item._id}>
            {item.nameToShow}
          </option>
        ))}
      </select>
      <label className='selectInputLabael'>{props.label}</label>
    </div>
  );
};

export default SelectFromProps;
