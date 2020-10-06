import React, { useState } from 'react';
import InputField from '../../component/inputs/input-field/InputField';
import SelectInput from '../../component/inputs/select-input/SelectInput';
import { UpdatePageContainer } from '../../component/global-style/SettingSection';
import MyButton from '../../component/my-button/MyButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
const element = <FontAwesomeIcon icon={faSave} />;

const AddUpdateVatList = ({
  history,
  match,
  addVatItem,
  updateVatItem,
  vatList,
}) => {
  const vatID = match.params.vatID;

  const singlevatItem =
    vatID && vatList.length !== 0
      ? vatList.filter((item) => item._id === vatID)
      : null;

  const dTitle = singlevatItem ? singlevatItem[0].title : '';
  const dDuplicate = singlevatItem ? singlevatItem[0].duplicate : '';
  const dVat = singlevatItem ? singlevatItem[0].vat : true;
  const dActive = singlevatItem ? singlevatItem[0].active : true;
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
    if (vatID) {
      try {
        await updateVatItem(vatID, vatItem);
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVatItem({ ...vatItem, [name]: value });
  };
  const cancel = () => {
    history.push('/settings/VAT-multipliers');
  };

  return (
    <UpdatePageContainer>
      <h3>{vatID ? 'הוספה' : 'עריכה'}</h3>
      <form onSubmit={handleSubmit}>
        <InputField
          name='title'
          type='text'
          label='כותרת'
          value={title}
          handleChange={handleChange}
          hebrew='true'
          required
        />
        <InputField
          name='duplicate'
          type='number'
          label='מכפילי שכר'
          value={duplicate}
          handleChange={handleChange}
          hebrew='true'
          required
        />
        <SelectInput
          name='vat'
          label='האם להוסיף מעמ'
          value={vat}
          handleChange={handleChange}
          required
        />
        <SelectInput
          name='active'
          label='פעיל'
          value={active}
          handleChange={handleChange}
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
