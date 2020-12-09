import React from 'react';
import SingleLectureSelect from './SingleLectureSelect';
import SingleLectureRemove from './singleLectureRemove';
import './lectureSelector.style.scss';
import SearchField from '../searchField/SearchField';
import LectureSelectSpinner from '../../components/spinner/lectureSelect-spinner/LectureSelectSpinner';

const LectureSelector = ({
  lectures,
  searchField,
  assignedLecturers,
  addLecture,
  removeLecture,
  lecturesLoading,
}) => {
  let filterLectures = searchField
    ? lectures.filter(({ name }) => {
        const testString = `${name} `;
        return testString.includes(searchField);
      })
    : lectures;

  let selectedLectureDisplay = lectures.filter((item) =>
    assignedLecturers.includes(item._id)
  );

  return lecturesLoading ? (
    <LectureSelectSpinner />
  ) : (
    <>
      <div className='lecture-selctor-container'>
        <div className='list-container'>
          <SearchField placeholder={'חפש לפי שם המרצה'} />
          <label>רשימת מרצים:</label>
          <div className='lecture-select-list'>
            {filterLectures.map((lecture) => (
              <SingleLectureSelect
                key={lecture._id}
                lecture={lecture}
                addLecture={addLecture}
              />
            ))}
          </div>
        </div>
        <div className='list-container'>
          <label>מרצים משויכים לקורס זה:</label>
          <div className='lecture-select-list'>
            {selectedLectureDisplay.length === 0 ? (
              <span>אין מרצים משוייכים</span>
            ) : (
              selectedLectureDisplay.map((selectedLecture) => (
                <SingleLectureRemove
                  removeLecture={removeLecture}
                  key={selectedLecture._id}
                  lecture={selectedLecture}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LectureSelector;
