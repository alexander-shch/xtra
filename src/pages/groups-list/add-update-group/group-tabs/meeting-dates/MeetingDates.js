import React, { useState } from 'react';
import CalenderSlide from './CalenderSlide';
import ListSlide from './ListSlide';
import { SliderContainer } from './meetingStyle';
import MeetingForm from './MettingForm';

const MeetingDates = () => {
  const [currentSlide, setCurrentSlide] = useState('list');
  return (
    <>
      <MeetingForm />
      <SliderContainer>
        <ListSlide
          setCurrentSlide={setCurrentSlide}
          currentSlide={currentSlide}
        />
        <CalenderSlide
          setCurrentSlide={setCurrentSlide}
          currentSlide={currentSlide}
        />
      </SliderContainer>
    </>
  );
};

export default MeetingDates;
