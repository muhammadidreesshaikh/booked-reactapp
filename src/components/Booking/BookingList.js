import React from 'react';
import '../../assets/css/booking-list.css';

import image from '../../assets/img/img.png'
import BookingDetails from './SideModal/BookingDetails';

class BookingList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    id: 0,
                    name: "David Wigfeild",
                    serviceName: "Service Name Here",
                    schedule: "1:00-2:00pm",
                    status: "completed"
                },
                {
                    id: 1,
                    name: "Sarah Young",
                    serviceName: "Service Name Here",
                    schedule: "1:00-2:00pm",
                    status: "today"
                },
                {
                    id: 2,
                    name: "Wesley Tolls",
                    serviceName: "Service Name Here",
                    schedule: "1:00-2:00pm",
                    status: "pending"
                },
                {
                    id: 3,
                    name: "Brad Franklin",
                    serviceName: "Service Name Here",
                    schedule: "1:00-2:00pm",
                    status: "upcoming"
                },
                {
                    id: 4,
                    name: "Lucas Greg",
                    serviceName: "Service Name Here",
                    schedule: "1:00-2:00pm",
                    status: "missed"
                }
            ],
            loading: false,
            side: false

        };
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
    }

    SideToggle = () => {
        let status = !this.state.side;
        this.setState({
            side: status
        });
    }

    render() {
        return (
            <div>
                <div className="list">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="row bar">
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <h5 className="float-left">BOOKING DETAILS</h5>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <h5 className="float-right">DATE / TIME</h5>
                                    </div>
                                </div>
                            </div>

                            {
                                this.state.data.map((item, index) => {
                                    return (
                                        <div className="col-12 col-md-12 col-lg-12 px-0 border-bottom">
                                            <div className="row main">

                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="booking-details">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <img src={image} />
                                                            </div>

                                                            <div className="col-md-8">
                                                                <h6 onClick={() => this.SideToggle() }>{item.name}</h6>
                                                                <a href="#">{item.serviceName}</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-6">
                                                    <div className="buttons">
                                                        <a href="#">Cancel Booking</a>
                                                        <button type="button" class="btn btn-primary px-3">Approve</button>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-2 col-lg-2">
                                                    <div className="date-time">
                                                        <div className={
                                                            item.status == 'completed' ? "grey py-3" :
                                                            item.status == 'pending' ? "orange py-3" :
                                                            item.status == 'upcoming' ? "blue py-3" :
                                                            item.status == 'today' ? "green py-3" :
                                                            item.status == 'missed' ? "missed py-3" : ""
                                                        }>
                                                            <span className="text-capitalize">{item.status}</span>
                                                            <p className="schedule">{item.schedule}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

                {/* <BookingDetails/> */}

                <div className="col-12 col-md-12 col-lg-12">
                    <div className={this.state.side == true ? "side open" : "side"}>

                        <div className="profile">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={image} />
                                </div>

                                <div className="col-md-8">
                                    <div className="heading float-left">
                                        <h2>Joe Smith</h2>
                                        <h6>Meeting Rooms</h6>
                                        <p>Booking #9827</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bar-section pt-5">
                            <div className="row">

                                <div className="col-md-4">
                                    <a>Booking</a>
                                </div>

                                <div className="col-md-4">
                                    <a>Customer</a>
                                </div>

                                <div className="col-md-4">
                                    <a>Payments</a>
                                </div>

                            </div>
                        </div>

                        <div className="form pt-4">
                            <div className="container">

                                <div className="col-md-12">
                                    <div className="input">
                                        <i class="fas fa-calendar-week"></i> <input type="text" placeholder="May 25, 2020"/> <a href="#">Change</a>
                                    </div>

                                    <div className="input mt-2">
                                        <i class="far fa-clock"></i> <input type="text" placeholder="Room Name / 01:00pm - 12:00pm"/> <a href="#">Change</a>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="name pt-4">
                                        <input type="text" placeholder="Joe Semth"/> <a href="#">*</a>
                                    </div>

                                    <div className="name mt-2">
                                        <input type="text" placeholder="2020 Financials" /> 
                                    </div>
                                    
                                    <div className="label pt-2">
                                        <div className="row">
                                            <span className="mx-3">?</span> <p>This is some help text for the field above.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="name pt-4">
                                        <input type="text" placeholder="Metting Description (optional)"/>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="metting-needs pt-4">
                                        <h6>Metting Needs</h6>
                                        <p className="pt-3">This is a field with a field title and field description. Both of these are optional and will display like this if included.</p>

                                        <div class="form-group">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                                                <label class="form-check-label" for="invalidCheck2">
                                                    Agree to terms and conditions
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default BookingList;