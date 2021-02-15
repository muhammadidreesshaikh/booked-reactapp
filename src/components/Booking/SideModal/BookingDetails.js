import React from 'react';
import '../../../assets/css/booking-details.css';

import image from '../../../assets/img/img.png'

class BookingDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
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
                <div className="side open">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-12 col-md-12 col-lg-12">
                                <div className={this.state.side == true ? "side open" : "side"}>

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div className="profile">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img src={image} />
                                                </div>

                                                <div className="col-md-8">
                                                    <h2>Joe Smith</h2>
                                                    <h6>Meeting Rooms</h6>
                                                    <p>Booking #9827</p>
                                                </div>
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
export default BookingDetails;