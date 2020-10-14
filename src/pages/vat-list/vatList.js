import React from 'react';
import MyButton from '../../component/my-button/MyButton';
import { withRouter } from 'react-router-dom';
import { SettingSectionContainer } from '../../component/global-style/SettingSection';
import TableTop from '../../component/table-top/Tabletop';
import SingleVatItem from '../../component/single-items/vatList/SingleVatItem';
import SingleItemContainer from '../../component/single-items/singleItemContainer';

const VatList = ({ history, match, vatList, loading }) => {
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
          onClick={() => history.push(`${match.path}/addNewVat`)}
        >
          הוספה
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