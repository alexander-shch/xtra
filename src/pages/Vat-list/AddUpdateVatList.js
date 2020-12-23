import React, { useState, useEffect } from 'react';
import InputField from '../../components/inputs/input-field/InputField';
import SelectInput from '../../components/inputs/select-input/SelectInput';
import { UpdatePageContainer } from '../../components/global-style/SettingSection';
import MyButton from '../../components/My-button/MyButton';
import { withRouter } from 'react-router-dom';
import PageSpinner from '../../components/spinner/page-spinner/PageSpinner';
import { saveIcon } from '../../utils/fontAwesome';

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

  return (
    <PageSpinner active={innerSinglePageLoading}>
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
            <MyButton>{saveIcon}</MyButton>
          </div>
        </form>
      </UpdatePageContainer>
    </PageSpinner>
  );
};

export default withRouter(AddUpdateVatList);
