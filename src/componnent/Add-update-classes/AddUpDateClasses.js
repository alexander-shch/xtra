import React, { useState, useCallback } from 'react';
import './addUpdateClasses.style.scss';
import Calendar from '../Calendar/Calendar';
import FirstForm from './first-form/FirstForm';
import SecondForm from '../Add-update-classes/second-form/SecondForm';
import UpdateSingle from './update-singel-date/UpdateSingle';
import { withRouter } from 'react-router-dom';
import DeleteBox from '../delete-box/DeleteBox';
import { UpdatePageContainer } from '../global-style/SettingSection';
import Spinner from '../spinner/Spinner';

const AddUpDateClasses = ({
  buildings,
  match,
  location,
  addNewClass,
  history,
  updateClass,
  setAvailability,
  classes,
  loading,
  updateAvailability,
  deleteAvailability,
}) => {
  // default values--------------------------------------------------
  const url = match.params.ClassesID;

  const defaultName = url === 'updateClasses' ? location.state.name : '';
  const defaultBuilding =
    url === 'updateClasses' ? location.state.building._id : null;
  const defaultMinNum =
    url === 'updateClasses' ? location.state.minStudents : '';
  const defaultMaxNum =
    url === 'updateClasses' ? location.state.maxStudents : '';
  const title = url === 'updateClasses' ? 'עדכון כיתה' : 'הוספת כיתה';

  const classId = url === 'updateClasses' ? location.state._id : null;

  const events =
    classes.length > 0 && url === 'updateClasses'
      ? classes.filter((c) => c._id === classId)[0].availability
      : null;

  //-----------------states-----------------------------------------
  const [classDetails, setClassDetails] = useState({
    name: defaultName,
    minStudents: defaultMinNum,
    maxStudents: defaultMaxNum,
    building: defaultBuilding,
  });

  const [dateDetails, setDateDetails] = useState({
    from: '',
    to: '',
    fromTime: '',
    toTime: '',
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
    e.preventDefault();
    const { building } = classDetails;
    if (!building) {
      alert('יש לבחור בניין');
      return;
    }
    if (url === 'addClass') {
      try {
        await addNewClass(classDetails, history);
      } catch (err) {
        console.log(err);
      }
    }
    if (url === 'updateClasses') {
      try {
        await updateClass(classId, classDetails);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleDatesSubmit = async (e) => {
    e.preventDefault();
    const { from, to, fromTime, toTime, availabilityId } = dateDetails;
    if (
      from.length < 1 ||
      to.length < 1 ||
      fromTime.length < 1 ||
      toTime.length < 1
    ) {
      alert('יש למלא תאריך ושעות');
      return;
    }
    if (parseInt(toTime) - parseInt(fromTime) < 1) {
      alert('מינמום שעה ');
      return;
    } else {
      setLastUpdatedDate(from);
      try {
        availabilityId
          ? await updateAvailability(dateDetails)
          : await setAvailability(classId, dateDetails);
      } catch (err) {
        console.log(err);
      }
    }
    closeSingleBox();
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

  const delteItem = async () => {
    const { availabilityId } = dateDetails;
    try {
      await deleteAvailability(classId, availabilityId);
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
  const handdleChange = (e) => {
    const { name, value } = e.target;
    setClassDetails({ ...classDetails, [name]: value });
  };

  const dateHanddleChange = (e) => {
    const { name, value } = e.target;
    setDateDetails({ ...dateDetails, [name]: value });
  };

  //---------------------------------------------------------------
  const { confirmMsgView } = confirmMsg;
  const { updateSingleBoxDisplay } = dateDetails;
  return (
    <UpdatePageContainer>
      <div className='classForm'>
        <h3>{title}</h3>
        <FirstForm
          buildings={buildings}
          handleSubmit={handleSubmit}
          handdleChange={handdleChange}
          classDetails={classDetails}
        />
        {url === 'updateClasses' ? (
          <>
            <SecondForm
              handleDatesSubmit={handleDatesSubmit}
              dateHanddleChange={dateHanddleChange}
            />
            {loading ? (
              <Spinner />
            ) : (
              <Calendar
                lastDate={lastUpdatedDate}
                events={events}
                setDateClick={setDateClick}
                setEventClick={setEventClick}
              />
            )}
            {updateSingleBoxDisplay ? (
              <UpdateSingle
                dateDetails={dateDetails}
                dateHanddleChange={dateHanddleChange}
                handleDatesSubmit={handleDatesSubmit}
                openDeleteBox={openDeleteBox}
                closeSingleBox={closeSingleBox}
              />
            ) : null}
            {confirmMsgView ? (
              <DeleteBox
                item={confirmMsg}
                delteItem={delteItem}
                close={closeDeleteBox}
              />
            ) : null}
          </>
        ) : null}
      </div>
    </UpdatePageContainer>
  );
};

export default withRouter(AddUpDateClasses);
