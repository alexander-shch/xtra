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
  jewishHolydays,
}) => {
  const eventsToDisplay = events
    ? events.map((item) => {
        let from = new Date(item.from).toString().slice(15, 21);
        let to = new Date(item.to).toString().slice(15, 21);
        return (item = {
          title: `${to}-${from}`,
          start: new Date(item.from),
          end: new Date(item.to),
          id: item._id,
        });
      })
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
        eventSources={[jewishHolydays, eventsToDisplay]}
      />
    </>
  );
};

export default React.memo(Calendar);
