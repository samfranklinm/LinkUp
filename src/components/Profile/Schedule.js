/* 
In the body of the page create the following components (all in this file)

*/
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import Header from '../Header/Header';
import ProfileSidebar from './ProfileSidebar';
import './Schedule.css';

const events = [
    { title: 'Meeting', start: new Date() }
]
function MyCalendar() {
    return (
        <div>
            <Header />
            <div className="body-container">
                <ProfileSidebar />
                <div className="schedule-body">
                    <h2 className="schedule-text">Schedule</h2>
                    <hr className="hr-container"></hr>
                    <div className="calendar-container">
                        <Schedule />
                    </div>
                </div>
            </div>

        </div>
    )
}

function Schedule() {
    return (
        <div className='calendar'>
            <FullCalendar
                plugins={[timeGridPlugin]}
                initialView='timeGridWeek'
                titleFormat={{
                    month: 'long',
                    year: 'numeric'
                }}
                dayHeaderFormat={{
                    weekday: 'long',

                }}
                weekends={false}
                events={events}
                eventContent={renderEventContent}
                allDaySlot={false}
                expandRows={true}
                weekText
                slotMinTime={"07:00:00"}
                slotMaxTime={"22:00:00"}
            />
        </div>
    )
};

// a custom render function
function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}

export default MyCalendar;