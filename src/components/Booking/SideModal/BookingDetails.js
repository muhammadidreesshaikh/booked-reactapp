import React from 'react';
import '../../../assets/css/booking-details.css';

import image from '../../../assets/img/img.png'

class BookingDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    render() {
        return (
            <div>
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

                <div className="bar-section pt-3">
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

                <div className="form pt-3">
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
                            <div className="name pt-3">
                                <input type="text" placeholder="Metting Description (optional)"/>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="metting-needs pt-3">
                   <div className="container">

                       <div className="col=12 col-md-12 col-lg-12">
                            <h6>Metting Needs</h6>
                            <p className="pt-1">This is a field with a field title and field description. Both of these are optional and will display like this if included.</p>

                            <div class="form-group pt-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                                    <label class="form-check-label" for="invalidCheck2">
                                        Projector
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                                    <label class="form-check-label" for="invalidCheck2">
                                        Whiteboard
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                                    <label class="form-check-label" for="invalidCheck2">
                                        Computer
                                    </label>
                                </div>
                            </div>
                       </div>

                    </div>
                </div>

                <div className="buttons pt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <button type="button" class="float-left btn btn-primary btn-sm">Update Booking</button>
                                <button type="button" class="float-right btn btn-danger btn-sm">Update Booking</button>
                            </div>
                       </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default BookingDetails;