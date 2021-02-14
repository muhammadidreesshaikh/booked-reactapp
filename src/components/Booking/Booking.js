import React from 'react';
import '../../assets/css/booking.css';

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