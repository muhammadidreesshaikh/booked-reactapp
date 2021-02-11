import React from 'react';
import '../assets/css/booking.css';

class Booking extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    }

    componentDidMount() {
        console.log("Booking");

        this.setState({
            loading: true
        });
    }

    render() {
        return (
            <div>
                <div className="booking">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="row top">

                                    <div className="col-12 col-md-5 col-lg-5">
                                        <div className="left">
                                            <h2><i class="fas fa-bolt"></i>Booking</h2>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-7 col-lg-7">
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

                            <div className="col-12 col-md-5 col-lg-5">
                               <div className="main">
                                    <i class="fas fa-calendar calendar-color"></i>
                                    <h4 className="pt-4">No booking have been created.</h4>
                                    <p className="pt-1">You can add a booking form to your site or manually create a booking from this page.</p>

                                    <div className="buttons mt-4">
                                        <button type="button" class="btn btn-primary px-3 mr-3">
                                            <i class="fas fa-plus text-white"></i>Create a Booking
                                        </button>
                                        <button type="button" class="btn btn-light px-3">
                                            <i class="fas fa-chart-line text-black"></i>Documentation
                                        </button>
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
export default Booking;