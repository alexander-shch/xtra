import React from 'react';
import { SettingSectionContainer } from '../../component/global-style/settingSection';
import TableTop from '../../component/table-top/Tabletop';
import { withRouter } from 'react-router-dom';
import MyButton from '../../component/my-button/button';

const BookList = ({ history, match }) => {
  return (
    <SettingSectionContainer>
      <MyButton
        onClick={() => history.push(`${match.path}/addBook`)}
        addButtonStyle
      >
        הוספת ספר
      </MyButton>
      <h4>חוברות קורסים </h4>
      <TableTop
        tableProps={[
          'תאריך',
          'כותרת',
          'מלאי',
          'מחיר',
          'הזמנה אונליין',
          'אפשרויות',
        ]}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(BookList);
