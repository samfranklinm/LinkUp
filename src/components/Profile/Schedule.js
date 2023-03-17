import { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import Header from '../Header/Header';
import ProfileSidebar from './ProfileSidebar';
import { INITIAL_EVENTS, createEventId } from './event-utils'
import interactionPlugin from '@fullcalendar/interaction'
import './Schedule.css';

function Schedule() {
    return (
        <div>
            <Header />
            <div className="body-container">
                <ProfileSidebar />
                <div className="schedule-body">
                    <h2 className="schedule-text">Schedule</h2>
                    <hr className="hr-container"></hr>
                    <div className="calendar-container">
                        <Calendar />
                    </div>
                </div>
            </div>

        </div>
    )
}

function Calendar() {
    const [state, setState] = useState([]);

    function handleEventClick(clickInfo) {
        if (alert(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.removeInfo();
        }
    };

    function handleEvents(events) {
        setState(events);
    };

    function handleDateSelect(selectInfo) {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }
    };

    return (
        <div className='calendar'>
            <FullCalendar
                plugins={[timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'timeGridWeek'
                }}
                titleFormat={{
                    month: 'long',
                    year: 'numeric'
                }}
                dayHeaderFormat={{
                    day: 'numeric',
                    weekday: 'short',

                }}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                select={handleDateSelect}
                eventContent={renderEventContent} // custom render function
                eventClick={handleEventClick}
                eventsSet={handleEvents}
                weekends={true}
                expandRows={true}
                slotMinTime={"07:00:00"}
                slotMaxTime={"22:00:00"}
            />
        </div>
    )
};

function renderEventContent(eventInfo) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
            <span style={{ display: 'flex', justifyContent: 'center' }}>{eventInfo.event.title}</span>
            <b>{eventInfo.timeText}</b>
        </div>
    )
}

export default Schedule;