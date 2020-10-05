import React from 'react';
import InputField from '../inputs/input-field/InputField';
import { connect } from 'react-redux';
import { changeSearchField } from '../../redux/search/search.action';

const SearchField = ({ changeSearchField }) => {
  return (
    <InputField label='חפש' handleChange={changeSearchField} hebrew='true' />
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeSearchField: (event) => dispatch(changeSearchField(event.target.value)),
});

export default connect(null, mapDispatchToProps)(SearchField);