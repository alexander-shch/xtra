import React from 'react';
import { SettingSectionContainer } from '../../component/global-style/settingsSection';
import TableTop from '../../component/table-top/Tabletop';
import MyButton from '../../component/my-button/button';
import { withRouter } from 'react-router-dom';
import SingleItemContainer from '../../component/single-items/singleItemContainer';
import singleCategory from '../../component/single-items/single-category/singleCat';

const CategoriesList = ({ history, match, categories, ...otherProps }) => {
  return (
    <SettingSectionContainer>
      <MyButton
        onClick={() => history.push(`${match.path}/addNewCategory`)}
        addButtonStyle
      >
        הוספת תחום
      </MyButton>
      <h4>רשימת תחומים</h4>
      <TableTop tableProps={['תחום', 'אפשרויות']} />

      <SingleItemContainer
        SingleComponent={singleCategory}
        data={categories}
        loading={otherProps.loading}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(CategoriesList);
