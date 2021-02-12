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
                                <div className="row top">

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div className="left">
                                            <h2><i class="fas fa-bolt"></i>Booking</h2>
                                        </div>
                                    </div>

                                    {/* <div className="col-12 col-md-5 col-lg-5">
                                        <div className="row center">
                                            <a href="#"><i class="fas fa-angle-left"></i></a>

                                            <select class="form-control">
                                                <option selected>May, 2020</option>
                                                <option value="1">August, 2020</option>
                                                <option value="2">january, 2021</option>
                                            </select>

                                            <div class="btn-group" role="group">
                                                <button type="button" class="btn btn-secondary">MONTH</button>
                                                <button type="button" class="btn btn-secondary">WEEK</button>
                                                <button type="button" class="btn btn-secondary">DAY</button>
                                            </div>

                                            <a href="#"><i class="fas fa-angle-right"></i></a>
                                        </div>
                                    </div> */}

                                    <div className="col-12 col-md-8 col-lg-8">
                                        <div className="row right">
                                           <div className="col-md-5">
                                                <select class="form-control">
                                                    <option selected>All Services</option>
                                                    <option value="1">All Payments</option>
                                                    <option value="2">All Accounts</option>
                                                </select>
                                           </div>

                                            <div className="col-md-2">
                                                <div className="icon">
                                                    <a href="#"><i class="far fa-calendar-alt btn-primary mr-2"></i></a>
                                                    <a href="#"><i class="fas fa-plus btn-secondary"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

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