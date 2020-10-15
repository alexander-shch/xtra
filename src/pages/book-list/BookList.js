import React from 'react';
import { SettingSectionContainer } from '../../components/global-style/SettingSection';
import TableTop from '../../components/Table-top/Tabletop';
import { withRouter } from 'react-router-dom';
import MyButton from '../../components/My-button/MyButton';

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
