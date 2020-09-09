import React, { useState } from 'react';
import { UpdatePageContainer } from '../global-style/SettingSection';
import InputField from '../inputes/input-field/InputField';
import SelectInput from '../inputes/select-input/SelectInput';
import MyButton from '../My-button/MyButton';
import TextArea from '../inputes/text-area/TextArea';
import { withRouter } from 'react-router-dom';
import './AddUpdateDomain.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
const element = <FontAwesomeIcon icon={faSave} />;

const AddUpdateDomain = ({ history }) => {
  const [domainDetails, setDomainDetails] = useState({
    title: '',
    courseGoals: '',
    courseGoalsSiteTitle: '',
    preliminaryKnowledge: '',
    preliminaryKnowledgeSiteTitle: '',
    howPromoteYou: '',
    howPromoteYouSiteTitle: '',
    marketing: '',
    numberOfSessions: '',
    numberOfSessionsSiteTitle: '',
    sessionLength: '',
    sessionLengthSiteTitle: '',
    minStudent: '',
    maxStudent: '',
    priceForStudent: '',
    regularPrice: '',
    active: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDomainDetails({ ...domainDetails, [name]: value });
  };
  const cancel = () => {
    history.push('/settings/Domain-management');
  };
  return (
    <UpdatePageContainer>
      <h3>הוספת תחום</h3>
      <form>
        <InputField
          name='title'
          type='text'
          label='כותרת'
          handleChange={handleChange}
          hebrew='true'
          required
        />
        <div className='inputFlex'>
          <TextArea
            name='courseGoals'
            type='text'
            label='מטרת הקורס'
            handleChange={handleChange}
            hebrew='true'
            small='true'
            required
          />
          <InputField
            name='courseGoalsSiteTitle'
            type='text'
            label='כותרת באתר '
            handleChange={handleChange}
            hebrew='true'
            required
          />
          <InputField
            name='preliminaryKnowledge'
            type='text'
            label='דרישות/ידע מקדים'
            handleChange={handleChange}
            hebrew='true'
            required
          />
          <InputField
            name='preliminaryKnowledgeSiteTitle'
            type='text'
            label='כותרת באתר '
            handleChange={handleChange}
            hebrew='true'
            required
          />
          <InputField
            name='howPromoteYou'
            type='text'
            label='איך הקורס יקדם אתכם'
            handleChange={handleChange}
            hebrew='true'
            required
          />
          <InputField
            name='howPromoteYouSiteTitle'
            type='text'
            label='כותרת באתר '
            handleChange={handleChange}
            hebrew='true'
            required
          />
        </div>
        <TextArea
          name='marketing'
          type='text'
          label='עיגול שיווקי'
          handleChange={handleChange}
          hebrew='true'
          required
        />
        <div className='inputFlex'>
          <InputField
            name='numberOfSessions'
            type='text'
            label='מספר מפגשים'
            handleChange={handleChange}
            hebrew='true'
            required
          />
          <InputField
            name='numberOfSessionsSiteTitle'
            type='text'
            label='כותרת באתר '
            handleChange={handleChange}
            hebrew='true'
            required
          />
          <InputField
            name='sessionLength'
            type='text'
            label='אורך כל מפגש'
            handleChange={handleChange}
            hebrew='true'
            required
          />
          <InputField
            name='sessionLengthSiteTitle'
            type='text'
            label='כותרת באתר '
            handleChange={handleChange}
            hebrew='true'
            required
          />
        </div>
        <div className='inputFlex half'>
          <InputField
            name='minStudent'
            type='text'
            label='מספר תלמידים מינמלי'
            handleChange={handleChange}
            hebrew='true'
            required
          />
          <InputField
            name='maxStudent'
            type='text'
            label='מספר תלמידים מקסימלי'
            handleChange={handleChange}
            hebrew='true'
            required
          />
          <InputField
            name='priceForStudent'
            type='text'
            label='מחיר לשעה לסטודנט'
            handleChange={handleChange}
            hebrew='true'
            required
          />
          <InputField
            name='regularPrice'
            type='text'
            label='מחיר רגיל'
            handleChange={handleChange}
            hebrew='true'
            required
          />
        </div>
        <SelectInput name='active' handleChange={handleChange} label='פעיל' />
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

export default withRouter(AddUpdateDomain);
