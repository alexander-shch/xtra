import React from 'react';
import './firstForm.style.scss';
import InputField from '../../../../component/inputs/input-field/InputField';
import MyButton from '../../../../component/my-button/MyButton';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
const element = <FontAwesomeIcon icon={faSave} />;

const FirstForm = ({
  buildings,
  handleChange,
  handleSubmit,
  classDetails,
  history,
  loading,
  clearSingle,
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
        <div className='selectbuildingInput'>
          <select
            required
            name='building'
            className='buildingSelector'
            defaultValue={building !== null ? building : '1'}
            onChange={handleChange}
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
          handleChange={handleChange}
          hebrew='true'
          required
        />
        <InputField
          name='minStudents'
          type='number'
          label='מינימלי'
          value={minStudents}
          handleChange={handleChange}
          hebrew='true'
          required
        />
      </div>

      <div className='buttons'>
        <MyButton save loading={loading}>
          {element}
        </MyButton>
        <MyButton
          type='button'
          onClick={() => {
            history.push('/settings/list-classes');
            if (!classDetails) {
              clearSingle();
            }
          }}
          forgot
        >
          ביטול
        </MyButton>
      </div>
    </form>
  );
};

export default withRouter(FirstForm);
