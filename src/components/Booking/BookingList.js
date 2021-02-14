import React from 'react';
import '../../assets/css/booking-list.css';

import image from '../../assets/img/img.png'

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
            loading: false
        };
    }

    componentDidMount() {
        this.setState({
            loading: true
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
                                                                <h6>{item.name}</h6>
                                                                <a href="#">{item.serviceName}</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-6">
                                                    <div className="buttons">
                                                        <a href="#">Cancle Booking</a>
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
            </div>
        );
    }
}
export default BookingList;