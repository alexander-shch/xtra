import React from 'react';
import { SettingSectionContainer } from '../../components/global-style/SettingSection';
import MyButton from '../../components/My-button/MyButton';
import TableTop from '../../components/Table-top/Tabletop';
import SearchField from '../../components/searchField/SearchField';
import { withRouter } from 'react-router-dom';
import SingleLecture from '../../components/Single-Items/single-lecture/SingleLecture';

import SingleItemContainer from '../../components/Single-Items/SingleItemContainer';

const LecturersList = ({
  history,
  match,
  lectures,
  listLoading,
  searchField,
}) => {
  let filterLectures = searchField
    ? lectures.filter(({ name, email, phone }) => {
        const testString = `${name} ${email} ${phone}`;
        return testString.includes(searchField);
      })
    : lectures;

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
