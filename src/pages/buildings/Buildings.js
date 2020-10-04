import React from 'react';
import BuildingItem from '../../componnent/single-items/building-item/BuildingItem';
import { SettingSectionContainer } from '../../componnent/global-style/SettingSection';
import MyButton from '../../componnent/My-button/MyButton';
import TableTop from '../../componnent/table-top/Tabletop';
import { withRouter } from 'react-router-dom';
import SingleItemContainer from '../../componnent/single-items/singleItemContainer';

const Buildings = ({ match, history, data, ...otherProps }) => {
  return (
    <SettingSectionContainer>
      <MyButton
        onClick={() => history.push(`${match.path}/addNewBulding`)}
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
