import React, { useState } from 'react';
import '../../assets/css/calendar.css';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Calendar() {

  const [events, setEvents] = useState(
    [
      {
        title: 'All Day Event',
        start: '2021-02-01'
      },
      {
        title: 'Long Event',
        start: '2021-02-07',
        end: '2021-02-10',
        color: 'purple' // override!
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2021-02-09T16:00:00'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2021-02-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2021-02-11',
        end: '2021-02-13',
        color: 'purple' // override!
      },
      {
        title: 'Meeting',
        start: '2021-02-12T10:30:00',
        end: '2021-02-12T12:30:00',
        color: 'orange'
      },
      {
        title: 'Lunch',
        start: '2021-02-12T12:00:00',
        color: 'green'
      },
      {
        title: 'Meeting',
        start: '2021-02-12T14:30:00',
        color: 'yellow'
        
      },
      {
        title: 'Birthday Party',
        start: '2021-02-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2021-02-28'
      }
    ]
  );

    return(
      <div>
          <div className="calendar">
              <div className="container">
                  <div className="row justify-content-center">
                      
                      <div className="col-12 col-md-12 col-lg-12">
                         <div className="main py-4">
                              <FullCalendar
                                  plugins={[ dayGridPlugin ]}
                                  initialView="dayGridMonth"
                                  weekends={false}
                                  events={events}
                              />
                         </div>
                      </div>

                  </div>
              </div>
          </div>
      </div>
    );
}
export default Calendar;