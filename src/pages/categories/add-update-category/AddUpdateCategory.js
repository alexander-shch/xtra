import React, { useState } from 'react';
import { UpdatePageContainer } from '../../../component/global-style/SettingSection';
import InputField from '../../../component/inputs/input-field/InputField';
import SelectInput from '../../../component/inputs/select-input/SelectInput';
import MyButton from '../../../component/my-button/MyButton';
import TextArea from '../../../component/inputs/text-area/TextArea';
import { withRouter } from 'react-router-dom';
import './addUpdateCatagory.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
const element = <FontAwesomeIcon icon={faSave} />;

const AddUpdateCategory = ({
  history,
  match,
  categories,
  addNewCategory,
  updateCategoty,
}) => {
  const categoryId = match.params.categotyID;
  const singleCategory =
    categoryId && categories.length !== 0
      ? categories.filter((item) => item._id === categoryId)
      : null;

  //============================d for default=======================================================
  const dTitle = singleCategory ? singleCategory[0].title : '';
  const dCourseGoals = singleCategory
    ? singleCategory[0].courseDefaults.goals.value
    : '';
  const dCourseGoalsSiteTitle = singleCategory
    ? singleCategory[0].courseDefaults.goals.title
    : '';
  const dPreliminaryKnowledge = singleCategory
    ? singleCategory[0].courseDefaults.preliminaryKnowledge.value
    : '';
  const dPreliminaryKnowledgeSiteTitle = singleCategory
    ? singleCategory[0].courseDefaults.preliminaryKnowledge.title
    : '';
  const dHowPromoteYou = singleCategory
    ? singleCategory[0].courseDefaults.promotion.value
    : '';
  const dHowPromoteYouSiteTitle = singleCategory
    ? singleCategory[0].courseDefaults.promotion.title
    : '';
  const dMarketing = singleCategory
    ? singleCategory[0].courseDefaults.marketing
    : '';
  const dNumberOfSessions = singleCategory
    ? singleCategory[0].courseDefaults.session.count.value
    : '';
  const dNumberOfSessionsSiteTitle = singleCategory
    ? singleCategory[0].courseDefaults.session.count.title
    : '';
  const dSessionLength = singleCategory
    ? singleCategory[0].courseDefaults.session.length.value
    : '';
  const dSessionLengthSiteTitle = singleCategory
    ? singleCategory[0].courseDefaults.session.length.title
    : '';
  const dMinStudent = singleCategory
    ? singleCategory[0].courseDefaults.minStudents
    : '';
  const dMaxStudent = singleCategory
    ? singleCategory[0].courseDefaults.maxStudents
    : '';
  const dPriceForStudent = singleCategory
    ? singleCategory[0].courseDefaults.studentPrice
    : '';
  const dRegularPrice = singleCategory
    ? singleCategory[0].courseDefaults.price
    : '';
  const dActive = singleCategory ? singleCategory[0].active : true;
  //=======================================================================================
  const [domainDetails, setDomainDetails] = useState({
    title: dTitle,
    courseGoals: dCourseGoals,
    courseGoalsSiteTitle: dCourseGoalsSiteTitle,
    preliminaryKnowledge: dPreliminaryKnowledge,
    preliminaryKnowledgeSiteTitle: dPreliminaryKnowledgeSiteTitle,
    howPromoteYou: dHowPromoteYou,
    howPromoteYouSiteTitle: dHowPromoteYouSiteTitle,
    marketing: dMarketing,
    numberOfSessions: dNumberOfSessions,
    numberOfSessionsSiteTitle: dNumberOfSessionsSiteTitle,
    sessionLength: dSessionLength,
    sessionLengthSiteTitle: dSessionLengthSiteTitle,
    minStudent: dMinStudent,
    maxStudent: dMaxStudent,
    priceForStudent: dPriceForStudent,
    regularPrice: dRegularPrice,
    active: dActive,
  });
  const {
    title,
    courseGoals,
    courseGoalsSiteTitle,
    preliminaryKnowledge,
    preliminaryKnowledgeSiteTitle,
    howPromoteYou,
    howPromoteYouSiteTitle,
    marketing,
    numberOfSessions,
    numberOfSessionsSiteTitle,
    sessionLength,
    sessionLengthSiteTitle,
    minStudent,
    maxStudent,
    priceForStudent,
    regularPrice,
    active,
  } = domainDetails;

  const objToServer = {
    title: title,
    active: JSON.parse(active),
    courseDefaults: {
      preliminaryKnowledge: {
        value: preliminaryKnowledge,
        title: preliminaryKnowledgeSiteTitle,
      },
      goals: { value: courseGoals, title: courseGoalsSiteTitle },
      promotion: { value: howPromoteYou, title: howPromoteYouSiteTitle },
      marketing: marketing,
      session: {
        count: { value: numberOfSessions, title: numberOfSessionsSiteTitle },
        length: { value: sessionLength, title: sessionLengthSiteTitle },
      },
      minStudents: minStudent,
      maxStudents: maxStudent,
      price: regularPrice,
      studentPrice: priceForStudent,
    },
  };
  //==================================================================================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (singleCategory) {
      try {
        await updateCategoty(categoryId, objToServer);
      } catch (err) {
        console.log(err);
      }
    }
    if (!singleCategory) {
      try {
        await addNewCategory(objToServer);
      } catch (err) {
        console.log(err);
      }
    }
    history.push('/settings/Categories-list');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDomainDetails({ ...domainDetails, [name]: value });
  };
  const cancel = () => {
    history.push('/settings/Categories-list');
  };

  return (
    <UpdatePageContainer>
      <h3>הוספת תחום</h3>
      <form onSubmit={handleSubmit}>
        <InputField
          name='title'
          type='text'
          label='כותרת'
          handleChange={handleChange}
          hebrew='true'
          value={title}
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
            value={courseGoals}
          />

          <InputField
            name='courseGoalsSiteTitle'
            type='text'
            label='כותרת באתר '
            handleChange={handleChange}
            hebrew='true'
            value={courseGoalsSiteTitle}
          />
          <InputField
            name='preliminaryKnowledge'
            type='text'
            label='דרישות/ידע מקדים'
            handleChange={handleChange}
            hebrew='true'
            value={preliminaryKnowledge}
          />
          <InputField
            name='preliminaryKnowledgeSiteTitle'
            type='text'
            label='כותרת באתר '
            handleChange={handleChange}
            hebrew='true'
            value={preliminaryKnowledgeSiteTitle}
          />
          <InputField
            name='howPromoteYou'
            type='text'
            label='איך הקורס יקדם אתכם'
            handleChange={handleChange}
            hebrew='true'
            value={howPromoteYou}
          />
          <InputField
            name='howPromoteYouSiteTitle'
            type='text'
            label='כותרת באתר '
            handleChange={handleChange}
            hebrew='true'
            value={howPromoteYouSiteTitle}
          />
        </div>
        <TextArea
          name='marketing'
          type='text'
          label='עיגול שיווקי'
          handleChange={handleChange}
          hebrew='true'
          value={marketing}
        />
        <div className='inputFlex'>
          <InputField
            name='numberOfSessions'
            type='number'
            label='מספר מפגשים'
            handleChange={handleChange}
            value={numberOfSessions}
            hebrew='true'
          />
          <InputField
            name='numberOfSessionsSiteTitle'
            type='text'
            label='כותרת באתר '
            handleChange={handleChange}
            hebrew='true'
            value={numberOfSessionsSiteTitle}
          />
          <InputField
            name='sessionLength'
            type='text'
            label='אורך כל מפגש'
            handleChange={handleChange}
            hebrew='true'
            value={sessionLength}
          />
          <InputField
            name='sessionLengthSiteTitle'
            type='text'
            label='כותרת באתר '
            handleChange={handleChange}
            hebrew='true'
            value={sessionLengthSiteTitle}
          />
        </div>
        <div className='inputFlex half'>
          <InputField
            name='minStudent'
            type='number'
            label='מספר תלמידים מינמלי'
            handleChange={handleChange}
            hebrew='true'
            value={minStudent}
          />
          <InputField
            name='maxStudent'
            type='number'
            label='מספר תלמידים מקסימלי'
            handleChange={handleChange}
            hebrew='true'
            value={maxStudent}
          />
          <InputField
            name='priceForStudent'
            type='number'
            label='מחיר לשעה לסטודנט'
            handleChange={handleChange}
            hebrew='true'
            value={priceForStudent}
          />
          <InputField
            name='regularPrice'
            type='number'
            label='מחיר רגיל'
            handleChange={handleChange}
            hebrew='true'
            value={regularPrice}
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

export default withRouter(AddUpdateCategory);
