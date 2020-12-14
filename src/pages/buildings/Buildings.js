import React from 'react';
import BuildingItem from '../../components/Single-Items/Building-item/BuildingItem';
import { SettingSectionContainer } from '../../components/global-style/SettingSection';
import MyButton from '../../components/My-button/MyButton';
import TableTop from '../../components/Table-top/Tabletop';
import { withRouter } from 'react-router-dom';
import SingleItemContainer from '../../components/Single-Items/SingleItemContainer';

const Buildings = ({ match, history, data, ...otherProps }) => {
  return (
    <SettingSectionContainer>
      <MyButton
        onClick={() => history.push(`${match.path}/addNewBulding`)}
        addButtonStyle
      >
        הוספת בניין
      </MyButton>
      <h4>רשימת בניינים</h4>
      <TableTop tableProps={['שם הבניין', 'אפשרויות']} />

      <SingleItemContainer
        SingleComponent={BuildingItem}
        data={data}
        loading={otherProps.loading}
        {...otherProps}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(Buildings);
