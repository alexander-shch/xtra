import React from 'react';
import './firstForm.style.scss';
import InputField from '../../../../components/inputs/input-field/InputField';
import MyButton from '../../../../components/My-button/MyButton';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import SelectInputProps from '../../../../components/inputs/selectProps/SelectInputProps';
const element = <FontAwesomeIcon icon={faSave} />;

const FirstForm = ({
  buildings,
  handleChange,
  handleSubmit,
  classDetails,
  history,
  loading,
}) => {
  const { name, minStudents, maxStudents, building } = classDetails;

  return (
    <form onSubmit={handleSubmit}>
      <div className='name-and-building'>
        <InputField
          name='name'
          type='text'
          label='שם הכיתה'
          value={name}
          handleChange={handleChange}
          hebrew='true'
          required
        />
        <SelectInputProps
          props={buildings}
          name='building'
          value={building}
          selectTitle='בחר בניין'
          keyToValue='_id'
          keyToDisplay='name'
          label='בחר בניין'
          handleChange={handleChange}
        />
      </div>
      <h4>מספר תלמידים</h4>

      <div className='studNum'>
        <InputField
          name='minStudents'
          type='number'
          label='מינימלי'
          value={minStudents}
          handleChange={handleChange}
          hebrew='true'
          required
        />
        <InputField
          name='maxStudents'
          type='number'
          label='מקסימלי'
          value={maxStudents}
          handleChange={handleChange}
          hebrew='true'
          required
        />
      </div>

      <div className='buttons'>
        <MyButton
          type='button'
          onClick={() => {
            history.push('/settings/list-classes');
          }}
          forgot
        >
          חזרה
        </MyButton>
        <MyButton save loading={loading}>
          {element}
        </MyButton>
      </div>
    </form>
  );
};

export default withRouter(FirstForm);
