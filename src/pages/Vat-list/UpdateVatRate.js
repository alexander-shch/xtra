import React, { useState } from 'react';
import { UpdatePageContainer } from '../../componnent/global-style/SettingSection';
import InputField from '../../componnent/inputes/input-field/InputField';
import MyButton from '../../componnent/My-button/MyButton';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
const element = <FontAwesomeIcon icon={faSave} />;

const UpdateVatRate = ({ history }) => {
  const [vatRate, setVatRate] = useState(17);

  const handdleChange = (e) => {
    const { value } = e.target;
    setVatRate(value);
  };
  const cancel = () => {
    history.push('/settings/VAT-multipliers');
  };
  return (
    <UpdatePageContainer>
      <h3>עידכון מע"מ</h3>
      <form>
        <InputField
          name='vatRate'
          type='number'
          label='מע"מ'
          value={vatRate}
          handleChange={handdleChange}
          hebrew='true'
          required
        />
        <div className='buttons'>
          <MyButton>{element}</MyButton>
          <MyButton type='button' onClick={() => cancel()} forgot>
            ביטול
          </MyButton>
        </div>
      </form>
    </UpdatePageContainer>
  );
};

export default withRouter(UpdateVatRate);
