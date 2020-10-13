import React from 'react';
import { SettingSectionContainer } from '../../componnent/global-style/SettingSection';
import MyButton from '../../componnent/My-button/MyButton';
import TableTop from '../../componnent/table-top/Tabletop';
import SearchField from '../../componnent/searchField/SearchField';
import { withRouter } from 'react-router-dom';
import SingleLecture from '../../componnent/single-items/single-lecture/SingleLecture';

import SingleItemContainer from '../../componnent/single-items/singleItemContainer';

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
