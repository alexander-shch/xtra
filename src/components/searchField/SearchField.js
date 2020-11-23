import React, { useEffect } from 'react';
import InputField from '../inputs/input-field/InputField';
import { connect } from 'react-redux';
import {
  changeSearchField,
  cleanSearchField,
} from '../../Redux/search/search.action';

const SearchField = ({ changeSearchField, cleanSearchField, placeholder }) => {
  useEffect(() => {
    return () => {
      cleanSearchField();
    };
  });
  return (
    <InputField
      placeholder={placeholder}
      label='חפש'
      handleChange={changeSearchField}
      hebrew='true'
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeSearchField: (event) => dispatch(changeSearchField(event.target.value)),
  cleanSearchField: () => dispatch(cleanSearchField()),
});

export default connect(null, mapDispatchToProps)(SearchField);
