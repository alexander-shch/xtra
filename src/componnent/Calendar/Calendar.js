import React from 'react';
import './calendar.style.scss';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = ({
  events,
  setDateClick,
  setEventClick,
  lastDate,
  jewsihHolydays,
}) => {
  const eventsToDisplay = events
    ? events.map(
        (item) =>
          (item = {
            title: `${item.from.slice(11, 16)}-${item.to.slice(11, 16)}`,
            start: item.from.slice(0, -1),
            end: item.to.slice(0, -1),
            id: item._id,
          })
      )
    : null;

  const handleDateSelect = (info) => {
    setDateClick(info.startStr);
  };

  const handleEventClick = (eventInfo) => {
    setEventClick(eventInfo.event);
  };

  return (
    <>
      <FullCalendar
        headerToolbar={{
          left: 'prev,next today',
          right: 'title',
        }}
        validRange={{
          start: new Date(),
        }}
        initialDate={lastDate}
        direction='rtl'
        locale='he'
        height='600px'
        initialView='dayGridMonth'
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        displayEventTime={false}
        plugins={[dayGridPlugin, interactionPlugin]}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventSources={[jewsihHolydays, eventsToDisplay]}
      />
    </>
  );
};

export default React.memo(Calendar);
