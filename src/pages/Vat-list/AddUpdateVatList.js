import React, { useState, useEffect } from 'react';
import InputField from '../../components/inputs/input-field/InputField';
import SelectInput from '../../components/inputs/select-input/SelectInput';
import { UpdatePageContainer } from '../../components/global-style/SettingSection';
import MyButton from '../../components/My-button/MyButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import Spinner from '../../components/spinner/Spinner';
const element = <FontAwesomeIcon icon={faSave} />;

const AddUpdateVatList = ({
  history,
  match,
  addVatItem,
  updateVatItem,
  ...props
}) => {
  const {
    getSingleVatItem,
    singleVatItem,
    clearSingle,
    error,
    innerSinglePageLoading,
  } = props;

  const vatID = match.params.vatID;

  useEffect(() => {
    if (vatID) {
      getSingleVatItem(vatID);
      return () => {
        clearSingle();
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [vatItem, setVatItem] = useState({
    title: '',
    duplicate: '',
    vat: true,
    active: true,
  });

  useEffect(() => {
    if (singleVatItem) {
      const { title, duplicate, vat, active } = singleVatItem;
      setVatItem({ title, duplicate, vat, active });
    }
    if (error) {
      history.push('/settings/VAT-multipliers');
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleVatItem, error]);

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

  return innerSinglePageLoading ? (
    <Spinner />
  ) : (
    <UpdatePageContainer>
      <h3>{vatID ? 'עריכה' : 'הוספה'}</h3>
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
          <MyButton type='button' onClick={() => cancel()} forgot>
            ביטול
          </MyButton>
          <MyButton>{element}</MyButton>
        </div>
      </form>
    </UpdatePageContainer>
  );
};

export default withRouter(AddUpdateVatList);
