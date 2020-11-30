import React, { useState } from 'react';
import SingleLectureSelect from './SingleLectureSelect';
import SingleLectureRemove from './singleLectureRemove';
import './lectureSelector.style.scss';
import SearchField from '../searchField/SearchField';

const LectureSelector = ({ lectures, searchField }) => {
  let [lectureList, setLectureList] = useState({ selctedLecture: [] });
  const { selctedLecture } = lectureList;

  const addLecture = (lectureItem) => {
    if (selctedLecture.includes(lectureItem)) {
      return;
    }
    setLectureList({ selctedLecture: [...selctedLecture, lectureItem] });
  };
  const removeLecture = (lectureItem) => {
    setLectureList({
      selctedLecture: selctedLecture.filter(
        (item) => item._id !== lectureItem._id
      ),
    });
  };
  let filterLectures = searchField
    ? lectures.filter(({ name, email, phone }) => {
        const testString = `${name} ${email} ${phone}`;
        return testString.includes(searchField);
      })
    : lectures;

  return (
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
            {selctedLecture.length === 0 ? (
              <span>אין מרצים משוייכים</span>
            ) : (
              selctedLecture.map((selectedLecture) => (
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
