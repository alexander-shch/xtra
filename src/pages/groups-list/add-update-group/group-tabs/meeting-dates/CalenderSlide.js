import React from 'react';
import MyButton from '../../../../../components/My-button/MyButton';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
import { CalenderSlideContainer, SlideContainer } from './meetingStyle';
import { listIcon } from '../../../../../utils/fontAwesome';
import {
  CalenderComp,
  interaction,
  daysGrid,
} from '../../../../../utils/calender.utils';

const CalenderSlide = ({ setCurrentSlide, currentSlide }) => {
  let isActive = currentSlide === 'calender' ? true : false;
  return (
    <>
      <CalenderSlideContainer active={isActive}>
        <MyButton justify={'flex-end'} onClick={() => setCurrentSlide('list')}>
          {listIcon}
        </MyButton>
        <SlideContainer>
          <CalenderComp
            headerToolbar={{
              left: 'prev,next today',
              right: 'title',
            }}
            validRange={{
              start: new Date(),
            }}
            direction='rtl'
            locale='he'
            height='600px'
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            displayEventTime={false}
            plugins={[daysGrid, interaction]}
          />
        </SlideContainer>
      </CalenderSlideContainer>
    </>
  );
};

export default CalenderSlide;
