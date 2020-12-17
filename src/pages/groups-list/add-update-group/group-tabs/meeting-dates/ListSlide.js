import React from 'react';
import MyButton from '../../../../../components/My-button/MyButton';
import { ListSlideContainer, SlideContainer } from './meetingStyle';
import { calenderIcon } from '../../../../../utils/fontAwesome';
import TableTop from '../../../../../components/Table-top/Tabletop';

const ListSlide = ({ setCurrentSlide, currentSlide }) => {
  let isActive = currentSlide === 'list' ? true : false;
  return (
    <ListSlideContainer active={isActive}>
      <MyButton onClick={() => setCurrentSlide('calender')}>
        {calenderIcon}
      </MyButton>
      <SlideContainer>
        <TableTop tableProps={['יום', 'שעות', 'כיתה', 'מרצה', 'אפשרויות']} />
      </SlideContainer>
    </ListSlideContainer>
  );
};

export default ListSlide;
