import React from 'react';
import '../../assets/css/calendar.css';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

class Calendar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Calendar");

        this.setState({
            loading: true
        });
    }

    render() {
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
                                    />
                               </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Calendar;