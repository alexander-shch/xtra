import React, { useState } from 'react';
import { UpdatePageContainer } from '../../../components/global-style/SettingSection';
import InputField from '../../../components/inputs/input-field/InputField';
import SelectInput from '../../../components/inputs/select-input/SelectInput';
import DateInput from '../../../components/inputs/date-input/DateInput';
import { DateInputs, Flex } from '../../../components/global-style/formsStyle';
import MyButton from '../../../components/My-button/MyButton';
import { codeGenerator } from '../../../utils/coupons.utils';
import { saveIcon } from '../../../utils/fontAwesome';

const AddUpdateCoupon = ({ addNewCoupon }) => {
  const [couponData, setCouponData] = useState({
    code: '',
    isPercent: true,
    discount: '',
    active: true,
    effectiveFrom: '',
    effectiveTo: '',
  });

  const generateCoupon = () => {
    setCouponData({ ...couponData, code: codeGenerator(6) });
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCouponData({ ...couponData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      addNewCoupon(couponData);
    } catch (err) {
      console.log(err);
    }
  };

  const {
    code,
    isPercent,
    discount,
    active,
    effectiveFrom,
    effectiveTo,
  } = couponData;
  return (
    <UpdatePageContainer>
      <form onSubmit={handleSubmit}>
        <InputField name='title' type='text' label='כותרת' required />
        <Flex>
          <InputField
            name='code'
            type='text'
            label='קוד הטבה'
            value={code}
            handleChange={handleChange}
            required
            withbutton='true'
          />
          <MyButton onClick={() => generateCoupon()} type='button' generate>
            יצר קוד
          </MyButton>
        </Flex>
        <DateInputs>
          <DateInput
            name='effectiveFrom'
            label='מתאריך'
            value={effectiveFrom}
            handleChange={handleChange}
            required
          />
          <DateInput
            name='effectiveTo'
            label='עד תאריך'
            value={effectiveTo}
            handleChange={handleChange}
            required
          />
        </DateInputs>
        <InputField
          name='discount'
          type='number'
          label='הנחה'
          value={discount}
          handleChange={handleChange}
          required
        />
        <SelectInput
          name='isPercent'
          label='הנחה באחוזים'
          value={isPercent}
          handleChange={handleChange}
        />
        <SelectInput
          name='active'
          label='פעיל'
          value={active}
          handleChange={handleChange}
        />
        <div className='buttons'>
          <MyButton>{saveIcon}</MyButton>
          <MyButton type='button' forgot>
            חזרה
          </MyButton>
        </div>
      </form>
    </UpdatePageContainer>
  );
};

export default AddUpdateCoupon;
