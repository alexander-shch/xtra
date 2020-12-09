import React, { useEffect, useState } from 'react';
import InputField from '../../../components/inputs/input-field/InputField';
import SelectInput from '../../../components/inputs/select-input/SelectInput';
import { UpdatePageContainer } from '../../../components/global-style/SettingSection';
import MyButton from '../../../components/My-button/MyButton';
import { saveIcon } from '../../../utils/fontAwesome';
import { withRouter } from 'react-router-dom';
import DateInput from '../../../components/inputs/date-input/DateInput';
import './semesterForm.style.scss';
import Spinner from '../../../components/spinner/Spinner';

const AddUpdateSemester = ({
  history,
  match,
  addNewSemester,
  innerSinglePageLoading,
  getSingleSemester,
  singleSemester,
  updateSemester,
  clearSingle,
  setAlert,
  error,
}) => {
  const semsesterID = match.params.semesterID;
  const [semesterData, setSemesterData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    active: true,
  });
  let { name, startDate, endDate, active } = semesterData;

  useEffect(() => {
    if (semsesterID) {
      getSingleSemester(semsesterID);
      return () => {
        clearSingle();
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (singleSemester) {
      const { name, startDate, endDate, active } = singleSemester;
      setSemesterData({
        name,
        startDate: startDate.slice(0, 10),
        endDate: endDate.slice(0, 10),
        active,
      });
    }
    if (error) {
      setAlert('לא ניתן לטעון סמסטר', 'error');
      history.push('/settings/Semesters');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleSemester, error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSemesterData({ ...semesterData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!startDate || !endDate) {
      setAlert('יש לבחור תאריכים', 'error');
      return;
    }
    if (new Date(startDate) > new Date(endDate)) {
      setAlert('תאריך סיום לא תקין', 'error');
      return;
    }
    if (semsesterID) {
      try {
        await await updateSemester(semesterData, semsesterID);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await addNewSemester(semesterData);
      } catch (err) {
        console.log(err);
      }
    }
    history.push('/settings/Semesters');
  };

  return innerSinglePageLoading ? (
    <Spinner />
  ) : (
    <UpdatePageContainer>
      <form onSubmit={handleSubmit}>
        <InputField
          name='name'
          value={name}
          type='text'
          label='כותרת'
          hebrew='true'
          handleChange={handleChange}
          required
        />
        <div className='dateInputs'>
          <DateInput
            handleChange={handleChange}
            name='startDate'
            value={startDate}
            label='תאריך התחלה'
          />
          <DateInput
            handleChange={handleChange}
            name='endDate'
            value={endDate}
            label='תאריך סיום'
          />
        </div>
        <SelectInput
          handleChange={handleChange}
          name='active'
          value={active}
          label='פעיל'
          required
        />
        <div className='buttons'>
          <MyButton
            type='button'
            onClick={() => history.push('/settings/Semesters')}
            forgot
          >
            חזרה
          </MyButton>
          <MyButton>{saveIcon}</MyButton>
        </div>
      </form>
    </UpdatePageContainer>
  );
};

export default withRouter(AddUpdateSemester);
