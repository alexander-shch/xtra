import React, { useEffect, useState } from 'react';
import { UpdatePageContainer } from '../../../components/global-style/SettingSection';
import InputField from '../../../components/inputs/input-field/InputField';
import SelectInput from '../../../components/inputs/select-input/SelectInput';
import DateInput from '../../../components/inputs/date-input/DateInput';
import { DateInputs, Flex } from '../../../components/global-style/formsStyle';
import MyButton from '../../../components/My-button/MyButton';
import { codeGenerator } from '../../../utils/coupons.utils';
import { saveIcon } from '../../../utils/fontAwesome';
import { withRouter } from 'react-router-dom';
import { setAlert } from '../../../Redux/My-Alert/myAlert.action';
import PageSpinner from '../../../components/spinner/page-spinner/PageSpinner';

const AddUpdateCoupon = ({
  match,
  history,
  addNewCoupon,
  getSingleCoupon,
  updateCoupon,
  clearSingle,
  error,
  singleCoupon,
  innerPageLoading,
  process,
}) => {
  const couponID = match.params.couponID;
  const [couponData, setCouponData] = useState({
    title: '',
    code: '',
    isPercent: true,
    discount: '',
    active: true,
    effectiveFrom: '',
    effectiveTo: '',
  });

  useEffect(() => {
    if (couponID) {
      getSingleCoupon(couponID);
      return () => {
        clearSingle();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (singleCoupon) {
      const {
        title,
        code,
        isPercent,
        discount,
        active,
        effectiveFrom,
        effectiveTo,
      } = singleCoupon;
      setCouponData({
        title,
        code,
        isPercent,
        discount,
        active,
        effectiveFrom: effectiveFrom ? effectiveFrom.slice(0, 10) : '',
        effectiveTo: effectiveTo ? effectiveTo.slice(0, 10) : '',
      });
    }
    if (error) {
      history.push('/settings/coupons');
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleCoupon, error]);

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
    if (couponID) {
      try {
        updateCoupon(couponData, couponID);
      } catch (err) {
        setAlert('לא ניתן לעדכן קופון', 'error');
      }
    }
    try {
      addNewCoupon(couponData);
    } catch (err) {
      setAlert('לא ניתן ליצור קופון חדש', 'error');
    }
  };

  const {
    title,
    code,
    isPercent,
    discount,
    active,
    effectiveFrom,
    effectiveTo,
  } = couponData;
  return (
    <PageSpinner active={innerPageLoading}>
      <UpdatePageContainer>
        <form onSubmit={handleSubmit}>
          <InputField
            name='title'
            type='text'
            label='כותרת'
            value={title}
            handleChange={handleChange}
            required
          />
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
            />
            <DateInput
              name='effectiveTo'
              label='עד תאריך'
              value={effectiveTo}
              handleChange={handleChange}
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
            <MyButton
              onClick={() => history.push('/settings/coupons')}
              type='button'
              forgot
            >
              חזרה
            </MyButton>
            <MyButton save loading={process}>
              {saveIcon}
            </MyButton>
          </div>
        </form>
      </UpdatePageContainer>
    </PageSpinner>
  );
};

export default withRouter(AddUpdateCoupon);
