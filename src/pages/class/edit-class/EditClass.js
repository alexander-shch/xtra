import React, { useState, useCallback, useEffect } from 'react';
import './addUpdateClasses.style.scss';
import Calendar from '../../../components/Calendar/Calendar';
import FirstForm from './first-form/FirstForm';
import SecondForm from './second-form/SecondForm';
import UpdateSingle from './update-single-date/UpdateSingle';
import { withRouter } from 'react-router-dom';
import DeleteDate from '../../../components/delete-box/DeleteDate';
import { UpdatePageContainer } from '../../../components/global-style/SettingSection';
import WithSpinner from '../../../components/spinner/WithSpinner';
import PageSpinner from '../../../components/spinner/page-spinner/PageSpinner';

const CalendarWithSpinner = WithSpinner(Calendar);

const EditClass = ({
  buildings,
  match,
  addNewClass,
  history,
  process,
  calenderLoading,
  setAlert,
  getSingleClass,
  singleClass,
  jewishHolydays,
  ...props
}) => {
  const {
    innerSinglePageLoading,
    error,
    clearSingle,
    deleteAvailability,
    updateAvailability,
    setAvailability,
    updateClass,
  } = props;
  const classID = match.params.classID;

  useEffect(() => {
    if (classID && !singleClass) {
      getSingleClass(classID);
    }
    if (classID) {
      return () => {
        clearSingle();
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [classDetails, setClassDetails] = useState({
    name: '',
    minStudents: '',
    maxStudents: '',
    building: '',
  });
  useEffect(() => {
    if (singleClass) {
      const { name, minStudents, maxStudents, building } = singleClass;
      setClassDetails({
        name,
        minStudents,
        maxStudents,
        building: building._id,
      });
    }
    if (error) {
      history.push('/settings/list-classes');
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleClass, error]);

  const events = singleClass ? singleClass.availability : null;
  const title = singleClass ? 'עדכון כיתה' : 'הוספת כיתה';

  const [dateDetails, setDateDetails] = useState({
    from: '',
    to: '',
    fromTime: '',
    toTime: '',
    limiter: [],
    updateSingleBoxDisplay: false,
    availabilityId: null,
  });

  const [confirmMsg, setConfirmMsg] = useState({
    confirmMsgView: false,
    name: '',
  });

  const [lastUpdatedDate, setLastUpdatedDate] = useState(new Date());

  //------------------------------------------------------------------------
  const handleSubmit = async (e) => {
    const { minStudents, maxStudents } = classDetails;
    e.preventDefault();
    const { building } = classDetails;
    if (!building) {
      setAlert('לא נבחר בניין', 'error');
      return;
    }
    if (Number(minStudents) > Number(maxStudents)) {
      setAlert('מספר תלמידים מינמלי גדול ממקסימלי', 'error');
      return;
    }
    if (!classID) {
      try {
        await addNewClass(classDetails, history);
      } catch (err) {
        console.log(err);
      }
    }
    if (classID) {
      try {
        await updateClass(classID, classDetails);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleDatesSubmit = async (e) => {
    e.preventDefault();
    const { from, to, fromTime, toTime, availabilityId } = dateDetails;
    let inputsArr = [from, to, fromTime, toTime];

    if (inputsArr.some((input) => input.length < 1)) {
      setAlert('יש למלא תאריכים ושעות', 'error');
      return;
    }

    if (isTimeValid(toTime, fromTime) < 45) {
      setAlert('טווח של 45 דק מינמום', 'error');
      return;
    }
    if (!isTimePass(from, fromTime)) {
      setAlert('זמן התחלה עבר', 'error');
      return;
    } else {
      setLastUpdatedDate(from);
      try {
        availabilityId
          ? await updateAvailability(dateDetails)
          : await setAvailability(classID, dateDetails);
      } catch (err) {
        console.log(err);
      }
    }
    closeSingleBox();
  };

  const isTimeValid = (toTime, fromTime) => {
    let toTimeArr = toTime.split(':');
    let fromTimeArr = fromTime.split(':');
    let toTimeDate = new Date(0, 0, 0, toTimeArr[0], toTimeArr[1]);
    let fromTimeDate = new Date(0, 0, 0, fromTimeArr[0], fromTimeArr[1]);
    let minutes = Math.round((toTimeDate - fromTimeDate) / (1000 * 60));
    return minutes;
  };

  const isTimePass = (from, fromTime) => {
    let fromDate = new Date(`${from}T${fromTime}`);
    console.log(fromDate);
    if (fromDate < new Date()) {
      return false;
    } else {
      return true;
    }
  };

  const setDateClick = useCallback(
    (date) => {
      setDateDetails({
        ...dateDetails,
        from: date,
        to: date,
        updateSingleBoxDisplay: true,
        id: null,
        fromTime: '',
        toTime: '',
      });
    },
    [dateDetails]
  );

  const setEventClick = useCallback((eventInfo) => {
    const { id, startStr, endStr } = eventInfo;
    let from = startStr.slice(0, 10);
    let to = endStr.slice(0, 10);
    let fromTime = startStr.slice(11, 19);
    let toTime = endStr.slice(11, 19);
    setDateDetails({
      availabilityId: id,
      from: from,
      to: to,
      fromTime: fromTime,
      toTime: toTime,
      updateSingleBoxDisplay: true,
    });
  }, []);

  const openDeleteBox = () => {
    const { fromTime, toTime } = dateDetails;
    const eventName = `${fromTime.slice(0, 5)} - ${toTime.slice(0, 5)}`;
    setConfirmMsg({ confirmMsgView: true, name: eventName });
  };

  const deleteItem = async () => {
    const { availabilityId, from } = dateDetails;
    setLastUpdatedDate(from);
    try {
      await deleteAvailability(classID, availabilityId);
    } catch (err) {
      console.log(err);
    }
    closeDeleteBox();
    closeSingleBox();
  };
  const closeDeleteBox = () => {
    setConfirmMsg({ confirmMsgView: false, name: '' });
  };

  const closeSingleBox = () => {
    setDateDetails({
      ...dateDetails,
      from: '',
      to: '',
      fromTime: '',
      toTime: '',
      updateSingleBoxDisplay: false,
      availabilityId: null,
    });
  };
  //----------------------------------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassDetails({ ...classDetails, [name]: value });
  };

  const dateHandleChange = (e) => {
    const { name, value } = e.target;
    setDateDetails({ ...dateDetails, [name]: value });
  };
  const onDayChange = (e) => {
    let valuesArr = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setDateDetails({ ...dateDetails, limiter: valuesArr });
  };

  //---------------------------------------------------------------
  const { confirmMsgView } = confirmMsg;
  const { updateSingleBoxDisplay } = dateDetails;
  return (
    <>
      <PageSpinner active={innerSinglePageLoading}>
        <UpdatePageContainer>
          <h4>{title}</h4>
          <FirstForm
            loading={process}
            buildings={buildings}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            classDetails={classDetails}
            clearSingle={clearSingle}
          />
        </UpdatePageContainer>
        {classID ? (
          <>
            <UpdatePageContainer>
              <SecondForm
                onDayChange={onDayChange}
                handleDatesSubmit={handleDatesSubmit}
                dateHandleChange={dateHandleChange}
                dateDetails={dateDetails}
              />
            </UpdatePageContainer>
            <UpdatePageContainer>
              <div className='calendar-container'>
                <CalendarWithSpinner
                  loading={calenderLoading}
                  lastDate={lastUpdatedDate}
                  events={events}
                  jewishHolydays={jewishHolydays}
                  setDateClick={setDateClick}
                  setEventClick={setEventClick}
                />
              </div>
              <UpdateSingle
                view={updateSingleBoxDisplay}
                dateDetails={dateDetails}
                dateHandleChange={dateHandleChange}
                handleDatesSubmit={handleDatesSubmit}
                openDeleteBox={openDeleteBox}
                closeSingleBox={closeSingleBox}
              />
              <DeleteDate
                view={confirmMsgView}
                item={confirmMsg}
                deleteItem={deleteItem}
                close={closeDeleteBox}
              />
            </UpdatePageContainer>
          </>
        ) : null}
      </PageSpinner>
    </>
  );
};

export default withRouter(EditClass);
