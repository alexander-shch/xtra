import React from 'react';
import InputField from '../../componnent/inputes/input-field/InputField';
import { connect } from 'react-redux';
import { changeSearchField } from '../../Redux/search/search.action';

const SearchField = ({ changeSearchField }) => {
  return (
    <InputField label='חפש' handleChange={changeSearchField} hebrew='true' />
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeSearchField: (event) => dispatch(changeSearchField(event.target.value)),
});

export default connect(null, mapDispatchToProps)(SearchField);
