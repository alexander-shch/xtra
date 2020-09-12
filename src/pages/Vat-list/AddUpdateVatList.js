import React, { useState } from 'react';
import InputField from '../../componnent/inputes/input-field/InputField';
import SelectInput from '../../componnent/inputes/select-input/SelectInput';
import { UpdatePageContainer } from '../../componnent/global-style/SettingSection';
import MyButton from '../../componnent/My-button/MyButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
const element = <FontAwesomeIcon icon={faSave} />;

const AddUpdateVatList = ({
  location,
  history,
  match,
  addVatItem,
  updateVatItem,
}) => {
  const url = match.params.vatID;
  const dTitle = url === 'updateVatItem' ? location.state.title : '';
  const dDuplicate = url === 'updateVatItem' ? location.state.duplicate : '';
  const dVat = url === 'updateVatItem' ? location.state.vat : true;
  const dActive = url === 'updateVatItem' ? location.state.active : true;
  const [vatItem, setVatItem] = useState({
    title: dTitle,
    duplicate: dDuplicate,
    vat: dVat,
    active: dActive,
  });
  let { title, duplicate, vat, active } = vatItem;
  const handleSubmit = async (e) => {
    e.preventDefault();
    active = JSON.parse(active);
    duplicate = Number(duplicate);
    if (url === 'updateVatItem') {
      let itemid = location.state._id;
      try {
        await updateVatItem(itemid, vatItem);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await addVatItem(vatItem);
      } catch (err) {
        console.log(err);
      }
    }
    history.push('/settings/VAT-multipliers');
  };
  const handdleChange = (e) => {
    const { name, value } = e.target;
    setVatItem({ ...vatItem, [name]: value });
  };
  const cancel = () => {
    history.push('/settings/VAT-multipliers');
  };

  return (
    <UpdatePageContainer>
      <h3>{url === 'addVatItem' ? 'הוספה' : 'עריכה'}</h3>
      <form onSubmit={handleSubmit}>
        <InputField
          name='title'
          type='text'
          label='כותרת'
          value={title}
          handleChange={handdleChange}
          hebrew='true'
          required
        />
        <InputField
          name='duplicate'
          type='number'
          label='מכפילי שכר'
          value={duplicate}
          handleChange={handdleChange}
          hebrew='true'
          required
        />
        <SelectInput
          name='vat'
          label='האם להוסיף מעמ'
          value={vat}
          handleChange={handdleChange}
          required
        />
        <SelectInput
          name='active'
          label='פעיל'
          value={active}
          handleChange={handdleChange}
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

export default withRouter(AddUpdateVatList);
