import React from 'react';
import MyButton from '../../components/My-button/MyButton';
import { withRouter } from 'react-router-dom';
import { SettingSectionContainer } from '../../components/global-style/SettingSection';
import TableTop from '../../components/Table-top/Tabletop';
import SingleVatItem from '../../components/Single-Items/vatList/SingleVatItem';
import SingleItemContainer from '../../components/Single-Items/SingleItemContainer';

const VatList = ({ history, match, vatList, loading }) => {
  return (
    <SettingSectionContainer>
      <div className='addButtons'>
        <MyButton
          addButtonStyle
          onClick={() => history.push(`${match.path}/addNewVat`)}
        >
          הוספה
        </MyButton>
        <MyButton
          addButtonStyle
          onClick={() => history.push(`${match.path}/updateVatRate`)}
        >
          עידכון מע"מ
        </MyButton>
      </div>
      <h4>מכפילי שכר</h4>
      <TableTop
        tableProps={['כותרת', 'מכפילי שכר', 'האם להוסיף מע"מ', 'אפשרויות']}
      />
      <SingleItemContainer
        loading={loading}
        data={vatList}
        SingleComponent={SingleVatItem}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(VatList);
