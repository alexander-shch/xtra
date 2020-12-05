import React, { useState } from 'react';
import { UpdatePageContainer } from '../../components/global-style/SettingSection';
import InputField from '../../components/inputs/input-field/InputField';
import MyButton from '../../components/My-button/MyButton';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
const element = <FontAwesomeIcon icon={faSave} />;

const UpdateVatRate = ({ history, vatRate, ...props }) => {
  const { updateVat, setAlert } = props;
  const [rate, setRate] = useState(vatRate.value);

  const handleChange = (e) => {
    const { value } = e.target;
    setRate(value);
  };
  const cancel = () => {
    history.push('/settings/VAT-multipliers');
  };

  const handdleSubmit = (e) => {
    e.preventDefault();
    try {
      updateVat({ value: rate });
    } catch (err) {
      setAlert('מעמ לא עודכן', 'error');
    }
  };

  return (
    <UpdatePageContainer>
      <h3>עידכון מע"מ</h3>
      <form onSubmit={handdleSubmit}>
        <InputField
          handleChange={handleChange}
          value={rate}
          name='vatRate'
          type='number'
          label='מע"מ'
          hebrew='true'
          required
        />
        <div className='buttons'>
          <MyButton type='button' onClick={() => cancel()} forgot>
            ביטול
          </MyButton>
          <MyButton>{element}</MyButton>
        </div>
      </form>
    </UpdatePageContainer>
  );
};

export default withRouter(UpdateVatRate);
