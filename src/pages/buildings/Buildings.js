import React from 'react';
import BuildingItem from '../../component/single-items/building-item/buildingItem';
import SingleItemContainer from '../../component/single-items/singleItemContainer';
import { SettingSectionContainer } from '../../component/global-style/settingSection';
import MyButton from '../../component/my-button/myButton';
import TableTop from '../../component/table-top/Tabletop';
import { withRouter } from 'react-router-dom';

const Buildings = ({ match, history, data, ...otherProps }) => {
  return (
    <SettingSectionContainer>
      <MyButton
        onClick={() => history.push(`${match.path}/addNewBuilding`)}
        addButtonStyle
      >
        הוספת בניין
      </MyButton>
      <h4>רשימה</h4>
      <TableTop tableProps={['שם הבניין', 'אפשרויות']} />

      <SingleItemContainer
        SingleComponent={BuildingItem}
        data={data}
        loading={otherProps.loading}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(Buildings);
