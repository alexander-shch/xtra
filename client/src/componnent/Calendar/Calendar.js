import React from 'react';
import './calendar.style.scss';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = ({ toggleDateForm }) => {
  const events = [
    {
      title: '10:00-14:00',
      date: '2020-08-17',
    },
    { title: '8:00-14:00', date: '2020-08-20' },
  ];

  const handleDateSelect = (info) => {
    console.log(info.startStr);
  };

  const handleEventClick = (eventInfo) => {
    console.log(eventInfo.event.title);
  };
  // const customButtons = {
  //   myCustomButton: {
  //     text: 'custom!',
  //     click: function () {
  //       alert('clicked the custom button!');
  //     },
  //   },
  // };

  return (
    <>
      <FullCalendar
        // customButtons={{
        //   myCustomButton: {
        //     text: 'עדכן זמינות',
        //     click: () => toggleDateForm(),
        //   },
        // }}
        headerToolbar={{
          left: 'prev,next today',
          right: 'title',
        }}
        direction='rtl'
        locale='he'
        height='auto'
        initialView='dayGridMonth'
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        events={events}
        plugins={[dayGridPlugin, interactionPlugin]}
        select={handleDateSelect}
        eventClick={handleEventClick}
      />
    </>
  );
};

export default Calendar;
