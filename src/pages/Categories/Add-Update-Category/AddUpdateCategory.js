import React, { useEffect, useState } from 'react';
import { UpdatePageContainer } from '../../../components/global-style/SettingSection';
import InputField from '../../../components/inputs/input-field/InputField';
import SelectInput from '../../../components/inputs/select-input/SelectInput';
import MyButton from '../../../components/My-button/MyButton';
import TextArea from '../../../components/inputs/text-area/TextArea';
import { withRouter } from 'react-router-dom';
import './AddUpdateCategory.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../../../components/spinner/Spinner';

const element = <FontAwesomeIcon icon={faSave} />;

const AddUpdateCategory = ({
  history,
  match,
  addNewCategory,
  updateCategoty,
  ...props
}) => {
  const {
    getSingleCategory,
    clearSingle,
    error,
    singleCategory,
    innerSinglePageLoading,
  } = props;

  const categoryId = match.params.categotyID;
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
    minStudents: '',
    maxStudents: '',
    studentPrice: '',
    price: '',
    active: true,
  });

  useEffect(() => {
    if (categoryId) {
      getSingleCategory(categoryId);
      return () => {
        clearSingle();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  useEffect(() => {
    if (singleCategory) {
      const {
        title,
        active,
        courseDefaults: {
          studentPrice,
          minStudents,
          maxStudents,
          price,
          preliminaryKnowledge,
          goals,
          promotion,
          marketing,
          session: { count, length },
        },
      } = singleCategory;

      setDomainDetails({
        title,
        active,
        preliminaryKnowledge: preliminaryKnowledge.value,
        preliminaryKnowledgeSiteTitle: preliminaryKnowledge.title,
        courseGoals: goals.value,
        courseGoalsSiteTitle: goals.title,
        howPromoteYou: promotion.value,
        howPromoteYouSiteTitle: promotion.title,
        marketing,
        numberOfSessions: count.value,
        numberOfSessionsSiteTitle: count.title,
        sessionLength: length.value,
        sessionLengthSiteTitle: length.title,
        minStudents,
        maxStudents,
        studentPrice,
        price,
      });
    }
    if (error) {
      history.push('/settings/Categories-list');
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleCategory, error]);

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
    minStudents,
    maxStudents,
    studentPrice,
    price,
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
      minStudents: minStudents,
      maxStudents: maxStudents,
      price: price,
      studentPrice: studentPrice,
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

  return innerSinglePageLoading ? (
    <Spinner />
  ) : (
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
            name='minStudents'
            type='number'
            label='מספר תלמידים מינמלי'
            handleChange={handleChange}
            hebrew='true'
            value={minStudents}
          />
          <InputField
            name='maxStudents'
            type='number'
            label='מספר תלמידים מקסימלי'
            handleChange={handleChange}
            hebrew='true'
            value={maxStudents}
          />
          <InputField
            name='studentPrice'
            type='number'
            label='מחיר לשעה לסטודנט'
            handleChange={handleChange}
            hebrew='true'
            value={studentPrice}
          />
          <InputField
            name='price'
            type='number'
            label='מחיר רגיל'
            handleChange={handleChange}
            hebrew='true'
            value={price}
          />
        </div>
        <SelectInput name='active' handleChange={handleChange} label='פעיל' />
        <div className='buttons'>
          <MyButton>{element}</MyButton>
          <MyButton
            type='button'
            onClick={() => history.push('/settings/Categories-list')}
            forgot
          >
            ביטול
          </MyButton>
        </div>
      </form>
    </UpdatePageContainer>
  );
};

export default withRouter(AddUpdateCategory);
