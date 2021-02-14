import React from 'react';
import '../assets/css/app-header.css';

class AppHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
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
                <div className="app-header">
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AppHeader;