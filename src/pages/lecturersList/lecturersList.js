import React from 'react';
import { SettingSectionContainer } from '../../component/global-style/SettingSection';
import MyButton from '../../component/my-button/MyButton';
import TableTop from '../../component/table-top/Tabletop';
import SearchField from '../../component/searchField/SearchField';
import { withRouter } from 'react-router-dom';
import SingleLecture from '../../component/single-items/single-lecture/singleLecture';

import SingleItemContainer from '../../component/single-items/singleItemContainer';

const LecturersList = ({
  history,
  match,
  lectures,
  listLoading,
  searchField,
}) => {
  let filterLectures = lectures.filter(({ name, email, phone }) => {
    if (!searchField) {
      return lectures;
    } else {
      const testString = `${name} ${email} ${phone}`;
      return testString.includes(searchField);
    }
  });

  return (
    <SettingSectionContainer>
      <MyButton
        onClick={() => history.push(`${match.path}/addLecture`)}
        addButtonStyle
      >
        הוספת מרצה
      </MyButton>
      <SearchField />
      <h4>מרצים</h4>
      <TableTop
        tableProps={[
          'שם המרצה ',
          'טלפון',
          'דוא"ל ',
          'שכר ברוטו לשעה',
          'אפשרויות',
        ]}
      />
      <SingleItemContainer
        loading={listLoading}
        data={filterLectures}
        SingleComponent={SingleLecture}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(LecturersList);
