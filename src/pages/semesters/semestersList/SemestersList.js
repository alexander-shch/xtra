import React from 'react';
import { SettingSectionContainer } from '../../../components/global-style/SettingSection';
import MyButton from '../../../components/My-button/MyButton';
import TableTop from '../../../components/Table-top/Tabletop';
import { withRouter } from 'react-router-dom';
import SingleItemContainer from '../../../components/Single-Items/SingleItemContainer';
import SingleSemester from '../../../components/Single-Items/single-semester/SingleSemester';

const SemestersList = ({ history, match, semestersList, listLoading }) => {
  return (
    <SettingSectionContainer>
      <MyButton
        onClick={() => history.push(`${match.path}/addNewSemester`)}
        addButtonStyle
      >
        הוספת סמסטר
      </MyButton>
      <h4>רשימת סמסטרים</h4>
      <TableTop tableProps={['תאריך התחלה', 'כותרת', 'אפשרויות']} />

      <SingleItemContainer
        SingleComponent={SingleSemester}
        data={semestersList}
        loading={listLoading}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(SemestersList);
