import React from 'react';
import '../assets/css/app-header.css';

function AppHeader() {

    return (
        <div>
            <div className="app-header">
                <div className="container">
                    <div className="row justify-content-center">
                        
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="row top">

                                <div className="col-12 col-md-2 col-lg-2">
                                    <div className="left">
                                        <h2><i class="fas fa-bolt"></i>Booking</h2>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="row center">
                                        <div class="btn-group" role="group">
                                            <button type="button" class="btn btn-secondary px-3">PENDING <span>3</span> </button>
                                            <button type="button" class="btn btn-secondary px-3">TODAY <span>6</span> </button>
                                            <button type="button" class="btn btn-secondary px-3">UPCOMING <span>8</span> </button>
                                            <button type="button" class="btn btn-secondary px-3">COMPLETED <span>3</span> </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4 col-lg-4">
                                    <div className="row right">
                                        <div className="col-7 col-md-7 col-lg-7 px-0">
                                            <select class="form-control">
                                                <option selected>All Services</option>
                                                <option value="1">All Payments</option>
                                                <option value="2">All Accounts</option>
                                            </select>
                                        </div>

                                        <div className="col-4 col-md-4 col-lg-4 px-0">
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
export default AppHeader;