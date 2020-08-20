import React from 'react';
import './firstForm.style.scss';
import InputField from '../../input-field/InputField';
import MyButton from '../../My-button/MyButton';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
const element = <FontAwesomeIcon icon={faSave} />;

const FirstForm = ({
  buildings,
  handdleChange,
  handleSubmit,
  classDetails,
  history,
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
          handleChange={handdleChange}
          hebrew='true'
          required
        />
        <div className='selectbuildingInput'>
          <select
            name='building'
            className='buildingSelector'
            defaultValue={building !== null ? building : '1'}
            onChange={handdleChange}
          >
            <option value='1' disabled hidden>
              בחר בניין
            </option>
            {buildings.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
          <label className='selectInputLabael'>בחר בניין</label>
        </div>
      </div>
      <h4>מספר תלמידים</h4>

      <div className='studNum'>
        <InputField
          name='maxStudents'
          type='number'
          label='מקסימלי'
          value={maxStudents}
          handleChange={handdleChange}
          hebrew='true'
          required
        />
        <InputField
          name='minStudents'
          type='text'
          label='מינימלי'
          value={minStudents}
          handleChange={handdleChange}
          hebrew='true'
          required
        />
      </div>

      <div className='classesButtons'>
        <MyButton>{element}</MyButton>
        <MyButton
          type='button'
          onClick={() => history.push('/settings/list-classes')}
          forgot
        >
          ביטול
        </MyButton>
      </div>
    </form>
  );
};

export default withRouter(FirstForm);
