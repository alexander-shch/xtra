import React from 'react';
import MyButton from '../../componnent/My-button/MyButton';
import { withRouter } from 'react-router-dom';
import { SettingSectionContainer } from '../../componnent/global-style/SettingSection';
import TableTop from '../../componnent/Table-top/Tabletop';

const VatList = ({ history, match }) => {
  return (
    <SettingSectionContainer>
      <div className='addButtons'>
        <MyButton
          addButtonStyle
          onClick={() => history.push(`${match.path}/updateVatRate`)}
        >
          עידכון מע"מ
        </MyButton>
        <MyButton
          addButtonStyle
          onClick={() => history.push(`${match.path}/addUpdateVatList`)}
        >
          הוספה
        </MyButton>
      </div>
      <h4>מכפילי שכר</h4>
      <TableTop
        tableProps={['כותרת', 'מכפילי שכר', 'האם להוסיף מע"מ', 'אפשרויות']}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(VatList);
